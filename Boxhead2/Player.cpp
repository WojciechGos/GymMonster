#include "Player.h"

#include <iostream>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>
#include <allegro5/allegro_primitives.h>


#include "Control.h"

Player::Player(int x, int y) {
    position.setX(x);
    position.setY(y);
}

void Player::render(ALLEGRO_EVENT events, Movement* movement) {
	ALLEGRO_BITMAP* player = al_load_bitmap("player.png");


	if (!player) {
		std::cout << "player init error" << std::endl;
	}

	bool draw = true, active = false;
	int dir = 0, posx = 32;

	if (events.type == ALLEGRO_EVENT_TIMER)
	{
		active = true;
		if (movement->getDirection() == 0)
			dir = 0;
		else if (movement->getDirection() == 1)
			dir = 33;
		else if (movement->getDirection() == 2)
			dir = 65;
		else if (movement->getDirection() == 3)
			dir = 97;
		else
			active = false;
		draw = true;
		if (active)
			posx = 64;
		else
			posx = 32;
		if (posx >= 64)
			posx = 0;
	}
	else {}


	if (draw)
	{
		al_draw_bitmap_region(player, posx, dir, 32, 32, movement->getX(), movement->getY(), NULL);
	}

}

void render_shot(Movement* movement) {

}

void Player::drawLifeBar()
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
