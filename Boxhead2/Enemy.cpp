#include "Enemy.h"

#include <iostream>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_image.h>
#include <cmath>

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

	float length = std::ceil(sqrt(dx * dx + dy * dy));

	if (length != 0) {
		dx /= length;
		dy /= length;
	}

	// Update enemy position
	float move_x = 0;
	float move_y = 0;

	if (position.getX() < player_position->getX())
		move_x = std::ceil(dx * ENEMY_SPEED);
	else
		move_x = -1 * std::ceil(dx * ENEMY_SPEED);

	if (position.getY() < player_position->getY())
		move_y = std::ceil(dy * ENEMY_SPEED);
	else
		move_y = -1 * std::ceil(dy * ENEMY_SPEED);

	std::cout << "move_x: " << move_x << " move_y: " << move_y << std::endl;
	std::cout << "x: " << position.getX() << " y: " << position.getY() << std::endl;
	std::cout << "player_x: " << player_position->getX() << " player_y: " << player_position->getY() << std::endl;


	position.setX(position.getX() + move_x);
	position.setY(position.getY() + move_y);

}


void Enemy::render() {
	ALLEGRO_BITMAP* enemy = al_load_bitmap("zombie.png");


	if (!enemy) {
		std::cout << "enemy init error" << std::endl;
	}

	//al_clear_to_color(al_map_rgb(0, 0, 0));,
	al_draw_bitmap(enemy, position.getX(), position.getY(), 0);

}


Enemy Enemy::spawnEnemy() {
	Enemy enemy(INITIAL_ENEMY_POSITION_X, INITIAL_ENEMY_POSITION_Y);
	return enemy;
}
