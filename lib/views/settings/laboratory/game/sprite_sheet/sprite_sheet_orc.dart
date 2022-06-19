import 'dart:ui';

import 'package:bonfire/bonfire.dart';

class SpriteSheetOrc {
  static double animSpeed = 0.05;
  static late Image spriteSheetOrcRun;
  static late Image spriteSheetOrcAttack;
  static late Image spriteSheetOrcIdle;
  static late Image spriteSheetOrcDamage;
  static late Image spriteSheetOrcDie;

  static Future load() async {
    spriteSheetOrcRun = await Flame.images.load('game/orc_run.png');
    spriteSheetOrcAttack = await Flame.images.load('game/orc_attack.png');
    spriteSheetOrcIdle = await Flame.images.load('game/orc_idle.png');
    spriteSheetOrcDamage = await Flame.images.load('game/orc_damage.png');
    spriteSheetOrcDie = await Flame.images.load('game/orc_die.png');
  }

  static Future<SpriteAnimation> getRunBottomRight() {
    return spriteSheetOrcRun
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getRunBottomLeft() {
    return spriteSheetOrcRun
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 21,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getRunTopRight() {
    return spriteSheetOrcRun
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 42,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getRunTopLeft() {
    return spriteSheetOrcRun
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 63,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getIdleBottomRight() {
    return spriteSheetOrcIdle
        .getAnimation(
          size: Vector2.all(21),
          count: 16,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getIdleBottomLeft() {
    return spriteSheetOrcIdle
        .getAnimation(
          size: Vector2.all(21),
          count: 16,
          startDy: 21,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getIdleTopRight() {
    return spriteSheetOrcIdle
        .getAnimation(
          size: Vector2.all(21),
          count: 16,
          startDy: 42,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getIdleTopLeft() {
    return spriteSheetOrcIdle
        .getAnimation(
          size: Vector2.all(21),
          count: 16,
          startDy: 63,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getAttackBottomRight() {
    return spriteSheetOrcAttack
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          loop: false,
          stepTime: animSpeed,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getAttackBottomLeft() {
    return spriteSheetOrcAttack
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 21,
          loop: false,
          stepTime: animSpeed,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getAttackTopRight() {
    return spriteSheetOrcAttack
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 42,
          loop: false,
          stepTime: animSpeed,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getAttackTopLeft() {
    return spriteSheetOrcAttack
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 63,
          loop: false,
          stepTime: animSpeed,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getDamageBottomRight() {
    return spriteSheetOrcDamage
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          loop: false,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getDamageBottomLeft() {
    return spriteSheetOrcDamage
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 21,
          loop: false,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getDamageTopRight() {
    return spriteSheetOrcDamage
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 42,
          loop: false,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getDamageTopLeft() {
    return spriteSheetOrcDamage
        .getAnimation(
          size: Vector2.all(21),
          count: 4,
          startDy: 63,
          loop: false,
        )
        .asFuture();
  }

  static Future<SpriteAnimation> getDie() {
    return spriteSheetOrcDie
        .getAnimation(
          size: Vector2.all(21),
          count: 12,
          loop: false,
        )
        .asFuture();
  }
}
