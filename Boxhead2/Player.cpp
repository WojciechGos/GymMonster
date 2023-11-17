#include "Player.h"

#include <iostream>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>


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