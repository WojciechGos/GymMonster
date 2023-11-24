#include <allegro5/allegro.h>
#include "Enemy.h"
#include <vector>
#include <allegro5/allegro.h>

#ifndef Gameplay_h
#define Gameplay_h

class Gameplay {

private:	
	int round = 0;
	int enemyNumberInRound = 1;
	int enemyNumberAlive = 0;
	int enemyNumberSpawned = 0;
	bool ifNewRoundStarted = false;

	void increaseEnemyNumber();

	bool ifAllEnemiesAreDead();
	void startRound();
	void spawnEnemy();

public:
	Gameplay();
	std::vector<Enemy> enemies;
	int getEnemyNumber();
	void run(ALLEGRO_EVENT event, ALLEGRO_TIMER* enemy_timer);
};



#endif