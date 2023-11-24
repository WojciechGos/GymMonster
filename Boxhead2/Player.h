#ifndef Player_h
#define Player_h

#include "Control.h"

#define INITIAL_PLAYER_POSITION_X 100
#define INITIAL_PLAYER_POSITION_Y 100


class Player {
private:
    int hp = 100;
public:
    Movement position;
    Player(int x, int y);

    void render(ALLEGRO_EVENT event, Movement* movement);
    void shot();
    void drawLifeBar();
};


#endif
