#ifndef Enemy_h
#define Enemy_h

#include "Control.h"


class Enemy {
public:

    Enemy();
    Enemy(int x, int y);
    void updatePosition(Movement* playerPosition);
    void render(ALLEGRO_EVENT event, Movement* movement);
    void setState(int state);
    void setDirection(int direction);
    static Enemy spawnEnemy();
    Movement* getPosition();
    int getState();
    int getDirection();

private:
    Movement position;
    int direction, state;
};

#endif

