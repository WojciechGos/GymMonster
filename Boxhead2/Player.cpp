#include "Player.h"

#include <iostream>
#include <string>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>
#include <allegro5/allegro_primitives.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_ttf.h>

#include "Control.h"

#define SPRITE_DIMENSION 32
#define SPRITE_SHIFT 10.0f // it is related to position of shot
#define LENGTH_OF_FIRE 2000


Player::Player(int x, int y) {
    position.setX(x);
    position.setY(y);
}

void Player::render(ALLEGRO_EVENT events) {
	ALLEGRO_BITMAP* player = al_load_bitmap("player.png");

	if (!player) {
		std::cout << "player init error" << std::endl;
	}

	if (events.type == ALLEGRO_EVENT_TIMER)
	{
		if (position.getActive())
			position.setState(position.getState()+32);
		else
			position.setState(32);

		if (position.getState() >= 96)
			position.setState(0);
	}

	al_draw_bitmap_region(player, position.getState(), position.getDirection(), 32, 32, position.getX(), position.getY(), NULL);
	//al_flip_display();
	//al_clear_to_color(al_map_rgb(0, 0, 0));
}


/*
	This function is reponsible for fire functionality. I
	It iterate for every enemy and checks wheter enemy is in field of fire
*/
void Player::shot(Gameplay* gameplay) {
	renderShot();

	float field_of_fire_y1 = 0, field_of_fire_y2 = 0;
	float field_of_fire_x1 = 0, field_of_fire_x2 = 0;
	float enemy_y = 0, enemy_x = 0;
	std::cout << "size: " << gameplay->enemies.size() << std::endl;
	for (auto enemy : gameplay->enemies) {

		enemy_x = enemy.getPosition()->getX();
		enemy_y = enemy.getPosition()->getY();
		std::cout << "enemy_x: " << enemy_x << " enemy_y: " << enemy_y << std::endl;
		std::cout << "player_x: " << position.getX() << " player_y: " << position.getY() << std::endl;
	
		
		field_of_fire_y1 = position.getY() + 2*SPRITE_SHIFT - SPRITE_DIMENSION;
		field_of_fire_y2 = position.getY() + 2 * SPRITE_SHIFT;
		
		field_of_fire_x1 = position.getX() + SPRITE_SHIFT - SPRITE_DIMENSION;
		field_of_fire_x2 = position.getX() + SPRITE_SHIFT;


		if (position.getDirection() == UP) {
			std::cout << "UP" << std::endl;
			if (enemy_y < position.getY() ) {

				// check if enemy is in field fire in X axis
				if(field_of_fire_x1 <= enemy_x && enemy_x <= field_of_fire_x2)
					std::cout << "BANG" << std::endl;
			}
		}
		else if (position.getDirection() == DOWN) {
			std::cout << "DOWN" << std::endl;
			if (enemy_y > position.getY()) {
				// check if enemy is in field fire in X axis
				if (field_of_fire_x1 <= enemy_x && enemy_x <= field_of_fire_x2)
					std::cout << "BANG" << std::endl;

			}

		}
		else if (position.getDirection() == LEFT) {
			std::cout << "LEFT" << std::endl;
			if (enemy_x < position.getX()) {
				std::cout << "field of fire y1: " << position.getY() << " y2: " << position.getY() + SPRITE_DIMENSION << std::endl;
				// check if enemy is in field fire in Y axis
				if (enemy_y >= field_of_fire_y1 && enemy_y <= field_of_fire_y2) {
					std::cout << "BANG" << std::endl;
				}
			}
		}
		else if (position.getDirection() == RIGHT) {
			std::cout << "RIGHT" << std::endl;
			if (enemy_x > position.getX()) {
				// check if enemy is in field fire in Y axis
				if (enemy_y >= field_of_fire_y1 && enemy_y <= field_of_fire_y2)
					std::cout << "BANG" << std::endl;
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
void Player::pointsCounter()
{
	int points = 0;
	/*
	if player killed enemy
	points =+1;
	*/

	std::string text = "POINTS: " + std::to_string(points);
	al_draw_text(al_create_builtin_font(), al_map_rgb(255, 255, 255), 1588, 40, ALLEGRO_ALIGN_CENTER, ("Points: " + std::to_string(points)).c_str());
}

void Player::renderShot() {
	
	float start_point_x = position.getX();
	float start_point_y = position.getY();

	float destination_x = position.getX();
	float destination_y = position.getY();



	if (position.getDirection() == UP) {
		destination_y -= LENGTH_OF_FIRE;
		start_point_x += SPRITE_SHIFT;
	}
	else if (position.getDirection() == DOWN) {
		destination_y += LENGTH_OF_FIRE;
		start_point_x += SPRITE_SHIFT;
	}
	else if (position.getDirection() == LEFT) {
		destination_x -= LENGTH_OF_FIRE;
		start_point_x += SPRITE_SHIFT;
		start_point_y += 2 * SPRITE_SHIFT;
	}
	else if (position.getDirection() == RIGHT) {
		destination_x += LENGTH_OF_FIRE;
		start_point_x += 2*SPRITE_SHIFT;
		start_point_y += 2*SPRITE_SHIFT;
	}

	al_draw_line(start_point_x, start_point_y, destination_x, destination_y, al_map_rgb(255, 255, 204), 2);
}