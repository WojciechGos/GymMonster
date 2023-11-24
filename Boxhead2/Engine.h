#ifndef Engine_h
#define Engine_h

#include <allegro5/allegro.h>
#include "Control.h"
#include "Player.h"
#include "Gameplay.h"

class Engine {
public:
    Engine();

    void init();
    void run();

private:


    void handle_keyboard(ALLEGRO_EVENT event, Player* player, Gameplay *gameplay);

    void handle_mouse();

};

#endif