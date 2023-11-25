#ifndef Enemy_h
#define Enemy_h

#include "Control.h"


class Enemy {
public:

    Enemy();
    Enemy(int x, int y);
    void updatePosition(Movement* playerPosition);
    void render(ALLEGRO_EVENT event);
    void setState(int state);
    void setDirection(int direction);
    static Enemy spawnEnemy();
    Movement* getPosition();
    int getState();
    int getDirection();
    void setIsAlive(bool state);
private:
    ALLEGRO_BITMAP* bitmap;
    bool isAlive = true;
    Movement position;
    int direction, state;
};

#endif

