#include <iostream>

using namespace std;

int main()
{
    const int height = 5, width = 5;
    int menu_choise;

    do
    {
        cout << "\nMENU:\n";
        cout << "[1.  right - top triangle]\n";
        cout << "[2.  Left - down triangle]\n";
        cout << "[3.  top triangle]\n";
        cout << "[4.  down triangle]\n";
        cout << "[5.  top - down triangle]\n";
        cout << "[6.  left - right triangle]\n";
        cout << "[7.  left triangle]\n";
        cout << "[8.  right triangle]\n";
        cout << "[9.  left - top triangle]\n";
        cout << "[10. down - right triangle]\n";
        cin >> menu_choise;

        switch(menu_choise)
        {
            case 1:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if(i < j || i == j) cout <<  "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 2:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if(i > j || i == j) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 3:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i < j || i == j) && (i + j) <= 4) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 4:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i > j || i == j) && (i + j) >= 4) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 5:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if( ((i > j) && ((i + j) >= height-1)) || ((i < j) && ((i+j) <= width-1)) || i == j) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 6:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if( ((i > j) && ((i + j) <= height-1)) || ((i < j) && ((i+j) >= width-1)) || i == j) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 7:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i>j) && ((i+j) <= height-1) || (i == j && (i+j) < width)) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 8:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i<j) && ((i+j) >= height-1) || ((i == j) && (i+j) >= width-1))  cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 9:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i+j)<height) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 10:
            {
                for(int i = 0; i < height; i++)
                {
                    for(int j = 0; j < width; j++)
                    {
                        if((i+j)>=width-1) cout << "*";
                        else cout << " ";
                    }
                    cout << "\n";
                }
            }break;
            case 0:break;
            default:
                cout  << "Bad choise, try again\n";
            break;
        }
    }
    while(menu_choise);
}
