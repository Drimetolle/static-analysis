import { TypeSpecifier } from "../source-analysis/data-objects/LanguageKeyWords";
import {
  MemberdeclarationContext,
  SimpleDeclarationContext,
} from "../grammar/CPP14Parser";
import { clone, head } from "ramda";
import { DeclarationSpecifier } from "../source-analysis/data-objects/DeclarationSpecifier";
import { DeclaratorSpecifier } from "../source-analysis/data-objects/DeclaratorSpecifier";
import { parseSimpleType } from "./TypeInference";
import DeclarationVisitor from "../visitors/DeclarationVisitor";
import { Lifecycle, scoped } from "tsyringe";
import TypeMember, { TypeMemberImplementation } from "./TypeMember";

export enum Stereotype {
  Value = "value",
  Struct = "struct",
  Class = "class",
  Enum = "enum",
}

export interface Specifiers {
  readonly declarationSpecifier: Array<DeclarationSpecifier>;
  readonly declaratorSpecifier: Array<DeclaratorSpecifier>;
}

interface InternalSpecifiers {
  readonly declarationSpecifier: Set<DeclarationSpecifier>;
  readonly declaratorSpecifier: Set<DeclaratorSpecifier>;
}

export interface MemberDeclaration {
  readonly identifier: string;
  readonly simpleType?: TypeSpecifier;
  readonly memberDeclaration: MemberdeclarationContext;
  readonly declarationSpecifiers: Array<DeclarationSpecifier>;
}

@scoped(Lifecycle.ContainerScoped)
export default class TypeBuilder {
  private readonly declarationVisitor: DeclarationVisitor;

  constructor(declarationVisitor: DeclarationVisitor) {
    this.declarationVisitor = declarationVisitor;
  }

  public createType(declaration: SimpleDeclarationContext): Type {
    const classKey = head(declaration.declSpecifierSeq()?.declSpecifier() ?? [])
      ?.typeSpecifier()
      ?.classSpecifier()
      ?.classHead()
      ?.classKey()?.text;

    switch (classKey) {
      case Stereotype.Struct:
        return this.createStructType(declaration);
      case Stereotype.Class:
        return this.createClassType(declaration);
      case Stereotype.Enum:
        return this.createEnumType(declaration);
      default:
        throw new Error(`Can't create struct type for ${declaration.text}`);
    }
  }

  public createClassType(declaration: SimpleDeclarationContext): Type {
    return new InternalType(
      Stereotype.Class,
      {
        declarationSpecifier: [],
        declaratorSpecifier: [],
      },
      []
    );
  }

  public createStructType(declaration: SimpleDeclarationContext): Type {
    const struct = declaration
      .declSpecifierSeq()
      ?.declSpecifier(0)
      .typeSpecifier()
      ?.classSpecifier();

    const structName = struct
      ?.classHead()
      ?.classHeadName()
      ?.className()
      ?.Identifier()?.text;

    if (!struct || !structName) {
      throw new Error(`Can't create struct type for ${declaration.text}`);
    }

    const members = new Array<TypeMember>();

    for (const member of struct.memberSpecification()?.memberdeclaration() ??
      []) {
      const declaration = member.declSpecifierSeq();

      if (!declaration) {
        continue;
      }

      // TODO now support only simple declaration
      const memberInfo = this.declarationVisitor
        .memberDeclaration(member)
        .pop()!;

      if (memberInfo) {
        const type = new InternalType(Stereotype.Value, {
          declarationSpecifier: memberInfo.declarationSpecifiers,
          declaratorSpecifier: [],
        });

        members.push(
          new TypeMemberImplementation(
            memberInfo.identifier,
            type,
            memberInfo.memberDeclaration
          )
        );
      }
    }
    return new InternalType(
      Stereotype.Struct,
      {
        declarationSpecifier: new Array<DeclarationSpecifier>(),
        declaratorSpecifier: new Array<DeclaratorSpecifier>(),
      },
      members
    ).setFullName(structName, []);
  }

  public createEnumType(declaration: SimpleDeclarationContext): Type {
    return new InternalType(
      Stereotype.Enum,
      {
        declarationSpecifier: [],
        declaratorSpecifier: [],
      },
      []
    );
  }

  public createValueType(declaration: SimpleDeclarationContext): Type {
    const simpleType = parseSimpleType(declaration.declSpecifierSeq());

    if (!simpleType) {
      throw new Error(`Can't create type for ${declaration.text}`);
    }

    return new InternalType(
      Stereotype.Value,
      {
        declarationSpecifier: [],
        declaratorSpecifier: [],
      },
      []
    ).setFullName(simpleType, []);
  }

  public createArrayType(
    declaration: SimpleDeclarationContext,
    length?: number
  ): Type {
    return new InternalType(
      Stereotype.Value,
      {
        declarationSpecifier: [],
        declaratorSpecifier: [],
      },
      []
    );
  }
}

export interface Type {
  fullName: string;
  IsPrimitive: boolean;
  IsEnumerable: boolean;
  IsClass: boolean;
  IsStruct: boolean;
  IsEnum: boolean;

  getPrimitiveType(): TypeSpecifier;

  getNestedMembers(): Array<TypeMember>;
}

class InternalType implements Type {
  private identifier?: string;
  private primitiveType?: TypeSpecifier;
  private readonly stereotype: Stereotype;
  private readonly members: Array<TypeMember>;
  private readonly specifiers: InternalSpecifiers;

  constructor(stereotype: Stereotype, specifiers: Specifiers);
  constructor(
    stereotype: Stereotype,
    specifiers: Specifiers,
    members: Array<TypeMember>
  );
  constructor(
    stereotype: Stereotype,
    specifiers: Specifiers,
    members?: Array<TypeMember>
  ) {
    this.stereotype = stereotype;
    this.members = members ?? [];

    this.specifiers = {
      declarationSpecifier: new Set<DeclarationSpecifier>(
        specifiers.declarationSpecifier
      ),
      declaratorSpecifier: new Set<DeclaratorSpecifier>(
        specifiers.declaratorSpecifier
      ),
    };

    switch (stereotype) {
      case Stereotype.Value:
        break;
      case Stereotype.Struct:
        break;
      case Stereotype.Class:
        break;
      case Stereotype.Enum:
        break;
    }
  }

  public get fullName() {
    return this.identifier?.toString() ?? "";
  }

  public get IsPrimitive() {
    return this.stereotype == Stereotype.Value;
  }

  public get IsEnumerable() {
    return this.specifiers.declaratorSpecifier.has(DeclaratorSpecifier.Pointer);
  }

  public get IsClass() {
    return this.stereotype == Stereotype.Class;
  }

  public get IsStruct() {
    return this.stereotype == Stereotype.Struct;
  }

  public get IsEnum() {
    return this.stereotype == Stereotype.Enum;
  }

  public getPrimitiveType() {
    return TypeSpecifier.INT;
  }

  public getNestedMembers(): Array<TypeMember> {
    return clone(this.members);
  }

  public toString() {
    return "";
  }

  public setFullName(typeId: string, nameSpaces: Array<string>) {
    this.identifier = typeId;
    return this;
  }
}
