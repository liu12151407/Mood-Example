import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:remixicon/remixicon.dart';
import 'package:bonfire/bonfire.dart';

import 'package:moodexample/themes/app_theme.dart';
import 'package:moodexample/widgets/action_button/action_button.dart';

import 'package:moodexample/views/settings/laboratory/game/components/human_player.dart';
import 'package:moodexample/views/settings/laboratory/game/components/light.dart';
import 'package:moodexample/views/settings/laboratory/game/components/orc.dart';

class GamePage extends StatefulWidget {
  const GamePage({Key? key}) : super(key: key);

  @override
  State<GamePage> createState() => _GamePageState();
}

class _GamePageState extends State<GamePage> {
  @override
  Widget build(BuildContext context) {
    // 屏幕自适应 设置尺寸（填写设计中设备的屏幕尺寸）如果设计基于360dp * 690dp的屏幕
    ScreenUtil.init(
      context,
      designSize: const Size(AppTheme.wdp, AppTheme.hdp),
    );
    return Theme(
      data: ThemeData(),
      child: Scaffold(
        backgroundColor: const Color(0xFFF6F8FA),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: const Color(0xFFF6F8FA),
          foregroundColor: Colors.black87,
          shadowColor: Colors.transparent,
          titleTextStyle: TextStyle(color: Colors.black, fontSize: 14.sp),
          title: const Text("游戏"),
          leading: ActionButton(
            decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [
                    AppTheme.backgroundColor1,
                    AppTheme.backgroundColor1
                  ],
                ),
                borderRadius:
                    BorderRadius.only(bottomRight: Radius.circular(18.w))),
            child: Icon(
              Remix.arrow_left_line,
              size: 24.sp,
            ),
            onTap: () {
              Navigator.of(context).pop();
            },
          ),
        ),
        body: const SafeArea(
          child: Game(),
        ),
      ),
    );
  }
}

class Game extends StatelessWidget {
  const Game({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      final tileSize = max(constraints.maxHeight, constraints.maxWidth) / 20;
      return BonfireTiledWidget(
        constructionMode: false,
        showCollisionArea: false,
        joystick: Joystick(
          keyboardConfig: KeyboardConfig(
            acceptedKeys: [
              LogicalKeyboardKey.space,
            ],
          ),
          directional: JoystickDirectional(),
          actions: [
            JoystickAction(
              actionId: 1,
              color: Colors.deepOrange,
              margin: const EdgeInsets.all(65),
            )
          ],
        ), // required
        map: TiledWorldMap(
          'game/tiles/map.json',
          forceTileSize: Size(tileSize, tileSize),
          objectsBuilder: {
            'light': (properties) => Light(
                  properties.position,
                  properties.size,
                ),
            'orc': (properties) => Orc(properties.position),
          },
        ),
        player: HumanPlayer(Vector2(4 * tileSize, 4 * tileSize)),
        lightingColorGame: Colors.black.withOpacity(0.7),
        progress: Container(
          color: Colors.black,
          child: const Center(
            child: Text(
              '载入中...',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
        overlayBuilderMap: {
          'miniMap': (context, game) => MiniMap(
                game: game,
                margin: const EdgeInsets.all(20),
                borderRadius: BorderRadius.circular(100),
                size: Vector2.all(constraints.maxHeight / 5),
                border: Border.all(color: Colors.white.withOpacity(0.5)),
                playerColor: Colors.green,
                enemyColor: Colors.red,
                npcColor: Colors.red,
              ),
        },
        initialActiveOverlays: const [
          'miniMap',
        ],
      );
    });
  }
}
