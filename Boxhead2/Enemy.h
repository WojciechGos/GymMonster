#ifndef Enemy_h
#define Enemy_h

#include "Control.h"

#define INITIAL_ENEMY_NUMBER 1
#define INITIAL_ENEMY_POSITION_X 850
#define INITIAL_ENEMY_POSITION_Y 50

class Enemy {
public:

    Enemy();
    Enemy(int x, int y);
    void updatePosition(Movement* playerPosition);
    void render();
    static Enemy* spawnEnemies(int number);

private:
    Movement position;
};

#endif

