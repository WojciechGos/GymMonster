#include "Control.h"

#include <allegro5/allegro.h>
#include <iostream>

/*
    Keyboard file contains all classes and functions that handle user's input.
*/


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
}
void Movement::setY(float y) {
    this->y = y;
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

