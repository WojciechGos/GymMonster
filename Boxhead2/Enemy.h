#ifndef Enemy_h
#define Enemy_h

#include "Control.h"


class Enemy {
public:

    Enemy();
    Enemy(int x, int y);
    void updatePosition(Movement* playerPosition);
    void render();
    static Enemy spawnEnemy();

private:
    Movement position;
};

#endif

