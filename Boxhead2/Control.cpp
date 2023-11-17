#include "Control.h"

#include <allegro5/allegro.h>
#include <iostream>

/*
    Keyboard file contains all classes and functions that handle user's input.
*/



#define MOVE 5


Movement::Movement() {
    this->x = 0;
    this->y = 0;
    this->state = 0;
    this->direction = 0;
}

Movement::Movement(float x, float y) {
    this->x = x;
    this->y = y;
}

//Movement Movement::update(Movement movement) {
//
//}

void Movement::setX(float x) {
    this->x = x;
    std::cout << x << std::endl;
}
void Movement::setY(float y) {
    this->y = y;
    std::cout << this->y << std::endl;
}
void Movement::setState(int state) {
    this->state = state;
}
void Movement::setDirection(int direction) {
    this->direction = direction;
}

int Movement::getX() {
    return this->x;
}
int Movement::getY() {
    return this->y;
}
int Movement::getState() {
    return this->state;
}
int Movement::getDirection() {
    return this->direction;
}


/*
    Function handle_keyboard is responsible for player movement.
*/
void handle_keyboard(ALLEGRO_EVENT event, Movement *movement) {

    ALLEGRO_KEYBOARD_STATE keyState;
    
    if (event.type == ALLEGRO_EVENT_TIMER) {
        al_get_keyboard_state(&keyState);
        
        if(al_key_down(&keyState, ALLEGRO_KEY_D))
            movement->setX(movement->getX() + MOVE);
        if (al_key_down(&keyState, ALLEGRO_KEY_A))
            movement->setX(movement->getX() - MOVE);
        if (al_key_down(&keyState, ALLEGRO_KEY_W))
            movement->setY(movement->getY() - MOVE);
        if (al_key_down(&keyState, ALLEGRO_KEY_S))
            movement->setY(movement->getY() + MOVE);
    }
}

void handle_mouse() {


    // iasiudiasubdfboszafuhgs
}

void exit_game() {

}