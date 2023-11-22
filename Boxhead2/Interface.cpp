#include "Interface.h"

#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>

void drawMap()
{
    al_clear_to_color(al_map_rgb(0, 0, 0));

    //map
    al_draw_filled_rectangle(0, 0, 1800, 900, al_map_rgb(217, 186, 140));

    int liczba_prostokatow = 8;
    int x = 0;
    int prostokat_szerokosc = 100;
    int prostokat_wysokosc = 50;

    for (int i = 0; i < liczba_prostokatow; i++) {
        al_draw_filled_rectangle(x, 0, x + prostokat_szerokosc, prostokat_wysokosc, al_map_rgb(128, 128, 128));
        al_draw_line(x + prostokat_szerokosc, 0, x + prostokat_szerokosc, prostokat_wysokosc, al_map_rgb(0, 0, 0), 2);

        x += prostokat_szerokosc;
    }

    int y = 1800;


    for (int i = 0; i < liczba_prostokatow; i++) {
        al_draw_filled_rectangle(y - prostokat_szerokosc, 0, y, prostokat_wysokosc, al_map_rgb(128, 128, 128));
        al_draw_line(y - prostokat_szerokosc, 0, y - prostokat_szerokosc, prostokat_wysokosc, al_map_rgb(0, 0, 0), 2);

        y -= prostokat_szerokosc;
    }



    int liczba_beczek = 10;
    int odleglosc_miedzy_beczkami = 50;
    int x_poczatek = 0;

    for (int i = 0; i < liczba_beczek; i++) {

        al_draw_filled_ellipse(x_poczatek, 300, 50, 25, al_map_rgb(255, 255, 255));
        al_draw_filled_ellipse(x_poczatek, 400, 50, 25, al_map_rgb(255, 255, 255));

        al_draw_ellipse(x_poczatek, 300, 50, 25, al_map_rgb(0, 0, 0), 2);
        al_draw_ellipse(x_poczatek, 400, 50, 25, al_map_rgb(0, 0, 0), 2);
        al_draw_filled_rectangle(x_poczatek - 50, 300, x_poczatek + 50, 400, al_map_rgb(255, 255, 255));

        x_poczatek += odleglosc_miedzy_beczkami;
    }



    int x_koniec = 1800;
    int y_poczatek = 250;

    for (int i = 0; i < liczba_beczek; i++) {
        float y_gora = y_poczatek - 25;
        float y_dol = y_poczatek + 25;

        al_draw_filled_ellipse(x_koniec, y_gora, 50, 25, al_map_rgb(255, 255, 255));
        al_draw_filled_ellipse(x_koniec, y_dol, 50, 25, al_map_rgb(255, 255, 255));
        al_draw_ellipse(x_koniec, y_gora, 50, 25, al_map_rgb(0, 0, 0), 2);
        al_draw_ellipse(x_koniec, y_dol, 50, 25, al_map_rgb(0, 0, 0), 2);
        al_draw_filled_rectangle(x_koniec - 50, y_gora, x_koniec + 50, y_dol, al_map_rgb(255, 255, 255));

        x_koniec -= odleglosc_miedzy_beczkami;
    }
}

/*
	Interface file contains all classes related with drawing graphic.
*/
