#ifndef Enemy_h
#define Enemy_h

#include "Control.h"

#define INITIAL_ENEMY_NUMBER 3


class Enemy {
public:

    Enemy();
    Enemy(int x, int y);
    void updatePosition(Movement* playerPosition);
    void render(ALLEGRO_EVENT event, Movement* movement);
    static Enemy spawnEnemy();

private:
    Movement position;
};

#endif

