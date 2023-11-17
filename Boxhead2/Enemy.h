#ifndef Enemy_h
#define Enemy_h

#include "Control.h"

#define INITIAL_ENEMY_NUMBER 1
#define INITIAL_ENEMY_POSITION_X 850
#define INITIAL_ENEMY_POSITION_Y 50

void update_enemy_position(Movement* enemy_position, Movement* player_position);

void render_enemy(Movement* movement);

#endif