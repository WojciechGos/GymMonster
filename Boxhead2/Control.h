#include <allegro5/allegro.h>

#ifndef Control_h
#define Control_h

class Movement {
private:
	float x, y;
	int direction, state;
public:
	Movement();
	Movement(float x, float y);
	void setX(float x);
	void setY(float y);
	void setState(int state);
	void setDirection(int direction);

	int getX();
	int getY();
	int getState();
	int getDirection();
};

void handle_keyboard(ALLEGRO_EVENT events, Movement *movement);

void handle_mouse();

#endif