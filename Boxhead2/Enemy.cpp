#include "Enemy.h"

#include <iostream>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>


#define ENEMY_SPEED 2.0f

#define INITIAL_ENEMY_POSITION_X 850
#define INITIAL_ENEMY_POSITION_Y 0

Enemy::Enemy(int x, int y) {
	position.setX(x);
	position.setY(y);
}

Enemy::Enemy() {

}

void Enemy::updatePosition(Movement* player_position) {

	float dx = player_position->getX();
	float dy = player_position->getY();

	float length = sqrt(dx * dx + dy * dy);

	if (length != 0) {
		dx /= length;
		dy /= length;
	}

	// Update enemy position
	float move_x = 0;
	float move_y = 0;

	if (position.getX() < player_position->getX())
		move_x = dx * ENEMY_SPEED;
	else
		move_x = -1 * dx * ENEMY_SPEED;

	if (position.getY() < player_position->getY())
		move_y = dy * ENEMY_SPEED;
	else
		move_y = -1 * dy * ENEMY_SPEED;

	if (position.getX() < player_position->getX())
	{
		if (position.getY() > player_position->getY())
		{
			position.setDirection(0);
		}
		else
		{
			position.setDirection(1);
		}
	}
	else if (position.getX() < player_position->getX())
	{
		if (position.getY() > player_position->getY())
		{
			position.setDirection(2);
		}
		else
		{
			position.setDirection(3);
		}
	}

	position.setX(position.getX() + move_x);
	position.setY(position.getY() + move_y);

}


void Enemy::render(ALLEGRO_EVENT events, Movement* movement) {
	ALLEGRO_BITMAP* enemy = al_load_bitmap("zombie.png");


	if (!enemy) {
		std::cout << "enemy init error" << std::endl;
	}

	bool draw = true, active = false;
	int dir = 0, posx = 32;

	if (events.type == ALLEGRO_EVENT_TIMER)
	{
		active = true;
		if (movement->getDirection() == 0)
			dir = 0;
		else if (movement->getDirection() == 1)
			dir = 32;
		else if (movement->getDirection() == 2)
			dir = 64;
		else if (movement->getDirection() == 3)
			dir = 96;
		else
			active = false;

		if (active)
			posx += 32;
		else
			posx = 32;
		if (posx >= 64)
			posx = 0;
		draw = true;
	}
	else {}


	if (draw)
	{
		al_draw_bitmap_region(enemy, posx, dir, 32, 32, position.getX(), position.getY(), NULL);
	}

}


Enemy Enemy::spawnEnemy() {
	Enemy enemy(INITIAL_ENEMY_POSITION_X, INITIAL_ENEMY_POSITION_Y);
	return enemy;
}
