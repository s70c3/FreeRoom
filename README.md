h1 FreeRoom App
h2 О проекте
Проект "Free Room" - выпускной проект на курсе Frontend-development в EPAM Systems.
Приложение визуализирует свободные комнаты в помещении. В моем варианте это свободные аудитории Университета ИТМО,
 но в принципе это может быть любым помещением.
h2 Установка
 Для установки необходимо иметь npm.

 Для установки необходимо выполнить следующее:

```shell
    git clone https://github.com/s70c3/FreeRoom.git
    cd FreeRoom
    npm install
```
Запуск осуществляется так же с помощью npm:

```shell
    npm start
```

NB! Для работы приложения необходимо иметь запущенную базу данных FreeRoomBase.
 Для её работы должны быть установлены mongodb и redis. В дальнейшем база будет переведена из локального варианта в глоабльный.
    ```shell
        git clone https://github.com/s70c3/FreeRoomBase.git
        cd FreeRoomBase
        npm install
        npm start
        ```
