#include "Player.h"

#include <iostream>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>
#include <allegro5/allegro_primitives.h>


#include "Control.h"


void render_player(Movement *movement) {
	ALLEGRO_BITMAP* player = al_load_bitmap("player.png");


	if (!player) {
		std::cout << "player init error" << std::endl;
	}

	//al_clear_to_color(al_map_rgb(0, 0, 0));
	
	//al_draw_bitmap_region(player, movement->getX(), movement->getY(), 100, 100, 100, 100, 0);
	al_draw_bitmap(player, movement->getX(), movement->getY(), 0);

}

void render_shot(Movement* movement) {

}

void drawLifeBar()
{

    ALLEGRO_COLOR bgColor = al_map_rgb(255, 255, 255);
    ALLEGRO_COLOR borderColor = al_map_rgb(0, 0, 0);
    ALLEGRO_COLOR lifeColor = al_map_rgb(255, 0, 0);

    al_draw_rectangle(100, 20, 700, 50, borderColor, 2);
    
        int lifePoints = 6;
        float lifeWidth = static_cast<float>(lifePoints) / 15.0 * 100;

        al_draw_rectangle(100, 20, 700, 50, borderColor, 2);
        //pasek zycia
        if (lifePoints > 0)
        al_draw_filled_rectangle(100, 20, 100 * lifePoints + 100, 50, lifeColor);

        //if player == oponent lifePoints -=1;
    
}
