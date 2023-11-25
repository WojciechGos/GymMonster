#include "Interface.h"

#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <cmath>

#define M_PI 3.14159265358979323846
#define RADIUS 15

void Interface::drawMap()
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


void Interface::blood(int x0, int y0)
{
    for (double alpha = 0; alpha <= M_PI / 2; alpha += 0.01) {
        int x = static_cast<int>(x0 + RADIUS * std::cos(alpha));
        int y = static_cast<int>(y0 - RADIUS * std::sin(alpha));

        al_draw_pixel(x, y, al_map_rgb(255, 0, 0));

        al_draw_pixel(x0 - (x - x0), y, al_map_rgb(255, 0, 0));
        al_draw_pixel(x, y0 + (y0 - y), al_map_rgb(255, 0, 0));
        al_draw_pixel(x0 - (x - x0), y0 + (y0 - y), al_map_rgb(255, 0, 0));
    }

    al_draw_filled_circle(x0, y0, RADIUS, al_map_rgb(255, 0, 0));
}


void Interface::barrel(int x0, int y0, int RX, int RY)
{
    for (double alpha = 0; alpha < 2 * M_PI; alpha += 0.01) {
        int x = x0 + RX * cos(alpha);
        int y = y0 + RY * sin(alpha);

        al_draw_pixel(x, y, al_map_rgb(0, 0, 0));
        al_draw_pixel(x, y - 50, al_map_rgb(0, 0, 0));
    }

    al_draw_filled_ellipse(x0, y0 - 2.5, RX, RY, al_map_rgb(255, 255, 255));
    al_draw_filled_ellipse(x0, y0 - 50, RX, RY, al_map_rgb(255, 255, 255));

    al_draw_filled_rectangle(720, 550, 880, 600, al_map_rgb(255, 255, 255));
}
/*
	Interface file contains all classes related with drawing graphic.
*/
