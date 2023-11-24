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

	enum Direction {down, left, right, up};
	bool draw = true, active = false;
	int dir = down, posX = 32;

	if (events.type == ALLEGRO_EVENT_TIMER)
	{
		active = true;

		if (movement->getDirection() == 0)
			dir = down;
		else if (movement->getDirection() == 1)
			dir = left;
		else if (movement->getDirection() == 2)
			dir = right;
		else if (movement->getDirection() == 3)
			dir = up;
		else
			active = false;
		
		if (active)
			posX += 32;
		else
			posX = 32;

		if (posX >= 96)
			posX = 0;
		
		draw = true;
	}

	if (draw)
	{
		al_draw_bitmap_region(player, posX, dir * 32, 32, 32, movement->getX(), movement->getY(), NULL);
		al_flip_display();
		//al_clear_to_color(al_map_rgb(0, 0, 0));
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
