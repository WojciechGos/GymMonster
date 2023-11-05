#include "Control.h"

#include <allegro5/allegro.h>
#include <iostream>

/*
    Keyboard file contains all classes and functions that handle user's input.
*/

void handle_keyboard(ALLEGRO_EVENT events) {

    if (events.type == ALLEGRO_EVENT_KEY_CHAR) {
        switch (events.keyboard.keycode) {

        case ALLEGRO_KEY_D:
            std::cout << "D" << std::endl;
            break;


        case ALLEGRO_KEY_A:
            std::cout << "A" << std::endl;
            break;


        case ALLEGRO_KEY_W:
            std::cout << "W" << std::endl;
        break;
        
        case ALLEGRO_KEY_S:
            std::cout << "S" << std::endl;
            break;


        case ALLEGRO_KEY_SPACE:
            std::cout << "SPACE" << std::endl;
            break;

        }
    }
}

void handle_mouse() {


    // iasiudiasubdfboszafuhgs
}

void exit_game() {

}