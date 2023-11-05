#include <allegro5/allegro.h>

#ifndef Control_h
#define Control_h

class Movement {
private:
	int x, y, direction, state;
public:
	Movement();
	//Movement update(Movement movement);
	void setX(int x);
	void setY(int y);
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