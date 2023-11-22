#ifndef Player_h
#define Player_h

#include "Control.h"

#define INITIAL_PLAYER_POSITION_X 100
#define INITIAL_PLAYER_POSITION_Y 100

void render_player(Movement *movement);
void render_shot(Movement* movement);
void drawLifeBar();

#endif
