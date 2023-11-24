#include <allegro5/allegro.h>

#ifndef Control_h
#define Control_h

#define DOWN 0
#define LEFT 32
#define RIGHT 64
#define UP 96

class Movement {
private:
	float x, y;
	int direction, state;
	bool active;
public:
	Movement();
	Movement(float x, float y);
	void setX(float x);
	void setY(float y);
	void setState(int state);
	void setDirection(int direction);
	void setActive(bool active);

	int getX();
	int getY();
	int getState();
	int getDirection();
	bool getActive();
};



#endif