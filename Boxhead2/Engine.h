#ifndef Engine_h
#define Engine_h

#include <allegro5/allegro.h>
#include "Control.h"
class Engine {
public:
    Engine();

    void init();
    void run();

private:


    void handle_keyboard(ALLEGRO_EVENT event, Movement* movement);

    void handle_mouse();

};

#endif