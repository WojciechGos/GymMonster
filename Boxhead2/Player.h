#ifndef Player_h
#define Player_h

#include "Control.h"
#include "Gameplay.h"

#define INITIAL_PLAYER_POSITION_X 100
#define INITIAL_PLAYER_POSITION_Y 100

class Player {
private:
    int hp = 100;
    void renderShot();
    ALLEGRO_BITMAP* player;

public:
    Movement position;
    Player(int x, int y);

    void render(ALLEGRO_EVENT event);
    void shot(Gameplay* gameplay);
    void drawLifeBar();
    void pointsCounter();

};


#endif
