import Vue from 'vue'
import Vuex from 'vuex'
import colors from "vuetify/lib/util/colors";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: {
            github: {
                icon: "mdi-github",
                name: "GitHub",
                value: "@gungniir",
                link: "https://github.com/gungniir"
            },
            telegram: {
                icon: "fab fa-telegram-plane",
                name: "Telegram",
                value: "@mrloruse",
                link: "https://t.me/mrloruse"
            },
            email: {
                icon: "mdi-email",
                name: "Email",
                value: "vladimir.kurus@yandex.ru",
                link: "mailto:vladimir.kurus@yandex.ru"
            }
        },
        tags: {
            alive: {
                text: "Демо",
                color: colors.green.base,
                icon: "mdi-web",
                description: "Проект жив и его можно потрогать своими руками!"
            },
            died: {
                text: "Отключен",
                color: colors.blueGrey.base,
            },
            lost: {
                text: "Потерян",
                color: colors.blueGrey.base,
            },
            php: {
                text: "PHP",
                color: colors.purple.base,
            },
            go: {
                text: "Go",
                color: colors.lightBlue.lighten2,
            },
            mysql: {
                text: "MySQL",
                color: colors.red.base,
            },
            postgresql: {
                text: "PostgreSQL",
                color: colors.blue.base,
            },
            vue: {
                text: "Vue",
                color: colors.cyan.base,
            },
            docker: {
                text: "Docker",
                color: colors.lightBlue.base,
            },
            rabbitMQ: {
                text: "RabbitMQ",
                color: colors.red.base,
            },
            bot: {
                text: "Bot",
                color: colors.orange.base,
            },
            laravel: {
                text: "Laravel",
                color: colors.red.base,
            },
            typescript: {
                text: "TypeScript",
                color: colors.blue.base,
            },
        },
        projects: [
            {
                id: "w7",
                name: "Генератор меню \"Menumaker\"",
                tags: ["alive", "laravel", "vue", "postgresql", "typescript", "docker"],
                catalog: {
                    imgSrc: "/img/menumaker/main.png",
                    description: "Наш совместный проект, где я выступал в роли разработчика, а мой напарник в роли дизайнера. Приложение, которое позволяет создавать меню на неделю на основе ваших рецептов и \"расписания\" приёмов пищи. Заодно на этом проекте я попрактиковался во Vue, TypeScript, Laravel и Docker"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/menumaker/Описание блюда-min.jpg",
                            title: "Блюда",
                            text: "Вообще этот проект призван был решить наши проблемы с составлением меню на неделю, так как самим заниматься этим стало сильно скучно. И у него получилось это сделать! Кстати, этот проект живой, его можно потыкать\n\nТестовый логин: test@example.com\nТестовый пароль: 12345\n",
                            link: {
                                url: 'https://menumaker.gungniir.ru',
                                text: 'Перейти к сайту'
                            }
                        },
                        {
                            imgSrc: "/img/menumaker/Создание режима-min.jpg",
                            title: "Режим питания",
                            text: "Можно создавать свои режимы питания, например, \"Повторять блюда с ужина на обед\" или \"Растягивание полдников\""
                        },
                        {
                            imgSrc: "/img/menumaker/Создание режима-min.jpg",
                            title: "Список продуктов",
                            text: "Ну и в можно составить список продуктов, которые нужно купить в магазине для меню на неделю (с учётом того, что у нас уже что-то есть)"
                        },
                    ]
                }
            },
            {
                id: "w2",
                name: "Интернет-магазин \"Ниточка\"",
                tags: ["died", "go", "vue", "postgresql", "rabbitMQ"],
                catalog: {
                    imgSrc: "/img/nitochka/main-min.png",
                    description: "Однажды меня попросили написать магазин за неплохую плату, а почему бы и нет? Заодно попрактиковался во Vue, Go и попробовал воссоздать микросервисную архитектуру"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/nitochka/main-min.png",
                            title: "Интернет-магазин",
                            text: "Создавая этот проект я постарался разделить его на множество частей: микросервис, отвечающий за http, микросервис, отвечающий за api мастерклассов и так далее...\n\nНо потом я понял, что люди, писавшие в интернете, что начинать проект на микросервисах с нуля нельзя, так как это будет очень сложно и не эффективно, оказались правы... Сейчас я переписываю это всё в монолит :)\n\nК сожалению, из-за переезда и некоторых других обстоятельств я не могу дать ссылку на сайт."
                        },
                        {
                            imgSrc: "/img/nitochka/cart-min.png",
                            title: "Интернет-магазин",
                            text: "Создавая этот проект я постарался разделить его на множество частей: микросервис, отвечающий за http, микросервис, отвечающий за api мастерклассов и так далее...\n\nНо потом я понял, что люди, писавшие в интернете, что начинать проект на микросервисах с нуля нельзя, так как это будет очень сложно и не эффективно, оказались правы... Сейчас я переписываю это всё в монолит :)\n\nК сожалению, из-за переезда и некоторых других обстоятельств я не могу дать ссылку на сайт."
                        },

                    ]
                }
            },
            {
                id: "w4",
                name: `Домашка v3 - "Феникс"`,
                tags: ["alive", "php", "mysql"],
                catalog: {
                    imgSrc: "/img/phoenix/main-min.png",
                    description: "Третья и, пожалуй, лучшая на данный момент версия проекта! Здесь можно прикреплять вложения, была реализована сложная система прав! И, кстати, этот проект проработал без моего участия год! Я даже не знал, что им кто-то пользовался! Было очень приятно об этом узнать :)"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/phoenix/main-min.png",
                            title: "История",
                            text: `Сайт был построен без использования каких-либо библиотек, сложнее JQuery, соответственно, работает он очень быстро.\nКстати, его можно потрогать своими руками!\n\nТестовый логин: test\nТестовый пароль: 12345\nПериод с заполненными данными: 01.10.2020-31.05.2021\n\n ps Чтобы изменить дату можно нажать на интервал сверху, либо воспользоваться поиском в правом нижнем углу`,
                            link: {
                                url: 'https://phoenix.gungniir.ru',
                                text: 'Перейти к сайту'
                            }
                        },
                        {
                            imgSrc: "/img/phoenix/mobile-min.png",
                            title: "Адаптивность",
                            text: "Куда же без неё :)"
                        },
                    ]
                }
            },
            {
                id: "w5",
                name: `Домашка v2 - "NewHW"`,
                tags: ["died", "php", "mysql"],
                catalog: {
                    imgSrc: "/img/newhw/main-min.jpg",
                    description: "Вскоре после создания первой версии Домашки мне показалось очень неудобным отсутствие возможности переключения даты, да и некрасиво с точки зрения архитектуры всё было. Так что я всё переписал!\nВстречайте Новую Домашку!"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/newhw/main-min.jpg",
                            title: "История",
                            text: `Вскоре после создания первой версии Домашки мне показалось очень неудобным отсутствие возможности переключения даты, да и некрасиво с точки зрения архитектуры всё было. Так что я всё переписал!\n\nВстречайте Новую Домашку!\n\nК Сожалению, я не смог найти полный скриншот, но помню, что для меня тогда это был полный прорыв! Я сделал адресацию не через ?page=[название страницы], а по-человечески!`,
                        },
                        {
                            imgSrc: "/img/newhw/mobile-min.jpg",
                            title: "Мобильная версия и монетизация",
                            text: "Я как-то решил подзаработать на своём деле и добавил платную тему - стикеры :)\nВсегда за 50 рублей одноклассники могли получить красивые стикеры вместо унылой таблицы :)\nВ общем, заработал я на этом 20 рублей, хотя человек 10 получили доступ к этой теме... Вот такой я бизнесмен :)"
                        },
                        {
                            imgSrc: "/img/newhw/mobile-2-min.jpg",
                            title: "Мобильная версия и монетизация",
                            text: "Я как-то решил подзаработать на своём деле и добавил платную тему - стикеры :)\nВсегда за 50 рублей одноклассники могли получить красивые стикеры вместо унылой таблицы :)\nВ общем, заработал я на этом 20 рублей, хотя человек 10 получили доступ к этой теме... Вот такой я бизнесмен :)"
                        },
                    ]
                }
            },
            {
                id: "w6",
                name: `Домашка v1 - "Улучшенная таблицы"`,
                tags: ["lost", "php"],
                catalog: {
                    imgSrc: "/img/hw/main-min.jpg",
                    description: "Первый мой достаточно массовый проект. Суть его заключалась в том, чтобы выводить из гугл-таблицы с домашкой дз на завтра :)"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/hw/main-min.jpg",
                            title: "История",
                            text: `Ничего не обычного здесь нет. Да и исходный код давно утерян...`,
                        },
                        {
                            imgSrc: "/img/hw/mobile-min.jpg",
                            title: "Адаптивность",
                            text: "Более-менее можно было пользоваться на телефонах :)"
                        },
                        {
                            imgSrc: "/img/hw/table-min.png",
                            title: "Таблица",
                            text: "Вот, кстати, та самая таблицы, из которой брались данные :)"
                        },
                    ]
                }
            },
            {
                id: "w3",
                name: "Findcity",
                tags: ["died", "php", "mysql"],
                catalog: {
                    imgSrc: "/img/findcity/main-min.png",
                    description: "Вы когда-нибудь хотели узнать город человека из ВК просто по его ссылке? Нет? А я вот хотел... Это второй мой проект, созданный после обучения в IT-колледже. Его основная задача анализировать друзей пользователя в ВК и выводить примерный город человека, основываясь на частоте городов у друзей :)\nСайт был создан летом 2017 года."
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/findcity/main-min.png",
                            title: "История",
                            text: "Вы когда-нибудь хотели узнать город человека из ВК просто по его ссылке? Нет? А я вот хотел... Это второй мой проект, созданный после обучения в IT-колледже. Его основная задача анализировать друзей пользователя в ВК и выводить примерный город человека, основываясь на частоте городов у друзей :)\nК сожалению, этот проект слишком дырявый, и я не могу дать ссылку на репозиторий."
                        },
                        {
                            imgSrc: "/img/findcity/mobile-min.jpg",
                            title: "Адаптивность",
                            text: "Уже тогда (в 2017) я делал адаптивные сайты :)"
                        },

                    ]
                }
            },
            {
                id: "t1",
                name: "Quizlet reminder bot",
                tags: ["alive", "go", "bot", "postgresql"],
                catalog: {
                    imgSrc: "/img/tg-quizlet-bot/main-min.png",
                    description: "Quizlet - это площадка, где вы создаёте карточки (термин - определение), а потом проходите различные тренировки для запоминания. Как ни странно, этот сервис использую в том числе для заучивания иностранных слов. А как известно, чтобы слова быстрее запоминались нужно их повторять как можно чаще сначала и периодический потом. Но когда у вас полсотни модулей следить за расписанием очень сложно... Именно поэтому был создан этот бот :)"
                },
                view: {
                    pages: [
                        {
                            imgSrc: "/img/tg-quizlet-bot/main-min.png",
                            title: "История",
                            text: "Этот бот работает с группами, и модули добавляются к группе, но в группе может быть и один человек :)\n\nЧтобы добавить модуль можно нажать соответствующую кнопку, а можно просто расшарить через официальное приложение Quizlet модуль, тогда бот сам вытащи название и ссылку\n\nБот напоминает о модуле по такой схеме: +1, +1, +3, +7, +14, +30, т.е. через день, потом ещё через день, потом через 3 и так далее...\n\nЕсли вы пропустили, то он напомнит о модуле завтра :)",
                            link: {
                                text: "Перейти к боту",
                                url: "https://t.me/quizlet_reminder_bot",
                                icon: "mdi-robot-happy-outline"
                            }
                        },
                        {
                            imgSrc: "/img/tg-quizlet-bot/adding-min.png",
                            title: "История",
                            text: "Этот бот работает с группами, и модули добавляются к группе, но в группе может быть и один человек :)\n\nЧтобы добавить модуль можно нажать соответствующую кнопку, а можно просто расшарить через официальное приложение Quizlet модуль, тогда бот сам вытащи название и ссылку\n\nБот напоминает о модуле по такой схеме: +1, +1, +3, +7, +14, +30, т.е. через день, потом ещё через день, потом через 3 и так далее...\n\nЕсли вы пропустили, то он напомнит о модуле завтра :)",
                            link: {
                                text: "Перейти к боту",
                                url: "https://t.me/quizlet_reminder_bot",
                                icon: "mdi-robot-happy-outline"
                            }
                        },
                        {
                            imgSrc: "/img/tg-quizlet-bot/schedule-min.png",
                            title: "История",
                            text: "Этот бот работает с группами, и модули добавляются к группе, но в группе может быть и один человек :)\n\nЧтобы добавить модуль можно нажать соответствующую кнопку, а можно просто расшарить через официальное приложение Quizlet модуль, тогда бот сам вытащи название и ссылку\n\nБот напоминает о модуле по такой схеме: +1, +1, +3, +7, +14, +30, т.е. через день, потом ещё через день, потом через 3 и так далее...\n\nЕсли вы пропустили, то он напомнит о модуле завтра :)",
                            link: {
                                text: "Перейти к боту",
                                url: "https://t.me/quizlet_reminder_bot",
                                icon: "mdi-robot-happy-outline"
                            }
                        },
                        {
                            imgSrc: "/img/tg-quizlet-bot/morning-min.png",
                            title: "Доброе утро!",
                            text: "Прекрасное начало утра!",
                            link: {
                                text: "Перейти к боту",
                                url: "https://t.me/quizlet_reminder_bot",
                                icon: "mdi-robot-happy-outline"
                            }
                        },

                    ]
                }
            },
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})
