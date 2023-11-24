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

	if (events.type == ALLEGRO_EVENT_TIMER)
	{
		if (movement->getActive())
			movement->setState(movement->getState()+32);
		else
			movement->setState(32);

		if (movement->getState() >= 96)
			movement->setState(0);
	}

	al_draw_bitmap_region(player, movement->getState(), movement->getDirection(), 32, 32, movement->getX(), movement->getY(), NULL);
	//al_flip_display();
	//al_clear_to_color(al_map_rgb(0, 0, 0));
}

void Player::shot(Gameplay* gameplay) {
	std::cout << "size: " << gameplay->enemies.size() << std::endl;
	for (auto enemy : gameplay->enemies) {
		std::cout << "enemy_x: " << enemy.getPosition()->getX() << " enemy_y: " << enemy.getPosition()->getY() << std::endl;
		
		if (position.getDirection() == UP) {
			std::cout << "UP" << std::endl;
			if (enemy.getPosition()->getY() > position.getY() ) {
				std::cout << "UP" << std::endl;
			}
		}
		else if (position.getDirection() == DOWN) {
			std::cout << "DOWN" << std::endl;
			if (enemy.getPosition()->getY() < position.getY()) {
				std::cout << "DOWN" << std::endl;
			}

		}
		else if (position.getDirection() == LEFT) {
			std::cout << "LEFT" << std::endl;
			if (enemy.getPosition()->getX() < position.getX()) {
				std::cout << "LEFT" << std::endl;
			}
		}
		else if (position.getDirection() == RIGHT) {
			std::cout << "RIGHT" << std::endl;
			if (enemy.getPosition()->getX() < position.getX()) {
				std::cout << "RIGHT" << std::endl;
			}
		}
	}
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
