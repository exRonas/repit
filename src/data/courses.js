export const coursesData = {
  tracks: [
    {
      id: "python-algo",
      title: "Алгоритмы и Python",
      description: "Развиваем логику через код. Олимпиадные задачи и мат. модели.",
      levels: [
        {
          id: "trainee",
          title: "TRAINEE",
          subtitle: "Основы синтаксиса и логики",
          locked: false,
          courses: [
            {
              id: "python-mindset",
              title: "Python: Архитектура мышления",
              description: "Базовый курс по программированию. От переменных до функций.",
              modules: [
                {
                  id: "week-1",
                  title: "Week 1: Ввод и Вывод",
                  lessons: [
                    {
                      id: "py-trainee-01",
                      title: "Урок 1: Протоколы I/O",
                      level: "Trainee",
                      duration_min: 90,
                      concept_block: {
                        title: "Input / Output Systems",
                        description: "Настройка интерфейса между биологическим оператором и цифровым ядром."
                      },
                      qore_content: {
                        questioning: {
                          title: "Тишина — это смерть системы",
                          text: "Представь суперкомпьютер с мощностью всего интернета. Он знает решение всех проблем человечества. Но у него нет монитора, нет клавиатуры и нет сетевой карты. Он просто черный ящик, гудящий в пустоте.\n\nПолезен ли он? Ноль. Абсолютный ноль.\n\nБез Ввода (Input) программа не получает данных. Без Вывода (Output) мы не видим результата. Программирование — это не магия внутри процессора, это организация потока данных сквозь него.",
                          interactive_question: {
                            text: "Какой канал связи является приоритетным для вывода информации человеку?",
                            options: [
                              "Запись в оперативную память",
                              "Визуальный интерфейс (Print)",
                              "Нагрев процессора"
                            ],
                            correct_answer: 1
                          }
                        },
                        observation: {
                          title: "Анализ сигнатур данных",
                          text: "Машина педантична. Для неё цифра 5 и символ '5' — это объекты из разных вселенных. Наблюдай разницу в обработке сигналов.",
                          code_snippet: {
                            language: "python",
                            code: "# Сценарий А: Арифметика (Integers)\nprint(10 + 10)\n# >> SYSTEM OUTPUT: 20\n\n# Сценарий Б: Конкатенация (Strings)\nprint('10' + '10')\n# >> SYSTEM OUTPUT: 1010",
                            comments: "В сценарии Б кавычки превращают данные в 'текст'. Python просто склеивает их, игнорируя математическую логику."
                          },
                          key_takeaway: "Текст (String) — это просто набор символов. Число (Integer) — это значение для вычислений."
                        },
                        reasoning: {
                          title: "Архитектура Пайплайна (I-P-O)",
                          text: "Любой алгоритм, от тостера до системы наведения ракет, работает по единой схеме. Если ты нарушишь порядок звеньев, цепь порвется.",
                          diagram_model: "INPUT (Сырье) -> PROCESS (Завод) -> OUTPUT (Продукт)",
                          logic_steps: [
                            "1. INPUT: Функция input() открывает шлюз для приема данных от пользователя. Система встает на паузу и ждет.",
                            "2. STORAGE: Данные помещаются в контейнер — Переменную (Variable). Без этого данные исчезнут сразу после ввода.",
                            "3. PROCESS: Мы форматируем или изменяем данные.",
                            "4. OUTPUT: Функция print() выбрасывает результат на консоль."
                          ],
                          analogy: "input() — это уши программы. print() — это её голос. Переменная — это краткосрочная память."
                        },
                        execution: {
                          title: "Протокол: Идентификация",
                          mission_brief: "Написать скрипт регистрации нового оператора в системе QORE.",
                          requirements: [
                            "Запросить позывной оператора (Callsign).",
                            "Запросить уровень доступа (число).",
                            "Вывести системное сообщение установленного образца."
                          ],
                          starter_code: "# System Initialization...\n# Используй input() для захвата данных\n# Используй f-строки (f'... {var} ...') для форматирования",
                          expected_output: "Agent [NEO] registered. Security Clearance: [5]. Welcome to the Grid.",
                          solution_snippet: "name = input('Enter Callsign: ')\nlevel = input('Enter Clearance Level: ')\nprint(f'Agent [{name}] registered. Security Clearance: [{level}]. Welcome to the Grid.')"
                        }
                      }
                    },
                    {
                      id: "lesson-2",
                      title: "Переменные как коробки",
                      qore: {
                        questioning: {
                          text: "Зачем нам хранить данные?",
                          concept: "Память компьютера — это огромный склад коробок."
                        },
                        observation: {
                          text: "a = 10. Мы положили 10 в коробку с надписью 'a'.",
                          code: "score = 0\nscore = score + 1\nprint(score)"
                        },
                        reasoning: {
                          text: "Переменная — это ссылка на область памяти.",
                          diagram: "Variable -> Memory Address -> Value"
                        },
                        execution: {
                          task: "Создай переменные для хранения имени героя и его уровня.",
                          initialCode: "hero_name = 'Arthas'\nlevel = 80\nprint(hero_name, level)"
                        }
                      }
                    }
                  ]
                },
                {
                  id: "week-2",
                  title: "Week 2: Ветвление реальности",
                  lessons: [
                    {
                      id: "lesson-3",
                      title: "Если... То... Иначе",
                      qore: {
                        questioning: {
                          text: "Как программа принимает решения?",
                          concept: "Булева логика: Истина (True) или Ложь (False)."
                        },
                        observation: {
                          text: "Сравнение чисел.",
                          code: "print(5 > 3) # True\nprint(2 == 2) # True"
                        },
                        reasoning: {
                          text: "Условный оператор if проверяет истинность утверждения.",
                          diagram: "Condition -> True Path / False Path"
                        },
                        execution: {
                          task: "Напиши проверку пароля.",
                          initialCode: "password = input('Пароль: ')\nif password == '1234':\n    print('Доступ разрешен')\nelse:\n    print('Доступ запрещен')"
                        }
                      }
                    },
                    {
                      id: "lesson-4",
                      title: "Логические операторы",
                      qore: {
                        questioning: {
                          text: "Как проверить несколько условий сразу?",
                          concept: "AND, OR, NOT."
                        },
                        observation: {
                          text: "Таблицы истинности.",
                          code: "print(True and False) # False\nprint(True or False) # True"
                        },
                        reasoning: {
                          text: "Мы можем комбинировать условия для сложной логики.",
                          diagram: "A AND B"
                        },
                        execution: {
                          task: "Система допуска: возраст > 12 И билет есть.",
                          initialCode: "age = 13\nhas_ticket = True\nif age > 12 and has_ticket:\n    print('Проходи')"
                        }
                      }
                    }
                  ]
                },
                {
                  id: "week-3",
                  title: "Week 3: Циклы и Повторения",
                  lessons: [
                    {
                      id: "lesson-5",
                      title: "Бесконечность не предел",
                      qore: {
                        questioning: {
                          text: "Как заставить компьютер делать одно и то же 1000 раз?",
                          concept: "Циклы (Loops)."
                        },
                        observation: {
                          text: "Цикл while.",
                          code: "i = 0\nwhile i < 5:\n    print(i)\n    i += 1"
                        },
                        reasoning: {
                          text: "Пока условие истинно, блок кода выполняется.",
                          diagram: "Loop Condition -> Body -> Loop Condition"
                        },
                        execution: {
                          task: "Напиши обратный отсчет от 10 до 0.",
                          initialCode: "count = 10\nwhile count >= 0:\n    print(count)\n    count -= 1"
                        }
                      }
                    },
                    {
                      id: "lesson-6",
                      title: "Перебор коллекций",
                      qore: {
                        questioning: {
                          text: "Как пройтись по всем элементам списка?",
                          concept: "Цикл for."
                        },
                        observation: {
                          text: "range() и списки.",
                          code: "for i in range(5):\n    print(i)"
                        },
                        reasoning: {
                          text: "Итерация — это последовательный доступ к элементам.",
                          diagram: "Iterator -> Next Element"
                        },
                        execution: {
                          task: "Выведи квадраты чисел от 1 до 5.",
                          initialCode: "for i in range(1, 6):\n    print(i * i)"
                        }
                      }
                    }
                  ]
                },
                {
                  id: "week-4",
                  title: "Week 4: Функции",
                  lessons: [
                    {
                      id: "lesson-7",
                      title: "Разделяй и властвуй",
                      qore: {
                        questioning: {
                          text: "Как не писать один и тот же код дважды?",
                          concept: "Функции (Functions)."
                        },
                        observation: {
                          text: "Определение функции def.",
                          code: "def greet(name):\n    print('Hello, ' + name)"
                        },
                        reasoning: {
                          text: "Функция — это подпрограмма, которую можно вызывать.",
                          diagram: "Call -> Function Body -> Return"
                        },
                        execution: {
                          task: "Напиши функцию сложения двух чисел.",
                          initialCode: "def add(a, b):\n    return a + b\n\nprint(add(5, 3))"
                        }
                      }
                    },
                    {
                      id: "lesson-8",
                      title: "Возвращаемые значения",
                      qore: {
                        questioning: {
                          text: "Как получить результат работы функции?",
                          concept: "return."
                        },
                        observation: {
                          text: "Разница между print и return.",
                          code: "def square(x):\n    return x * x\n\nresult = square(5)\nprint(result)"
                        },
                        reasoning: {
                          text: "Функция может быть частью выражения.",
                          diagram: "Function as Value"
                        },
                        execution: {
                          task: "Напиши функцию, которая возвращает большее из двух чисел.",
                          initialCode: "def max_of_two(a, b):\n    if a > b:\n        return a\n    return b"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "junior",
          title: "JUNIOR",
          subtitle: "Алгоритмы и структуры данных",
          locked: true,
          courses: []
        },
        {
          id: "middle",
          title: "MIDDLE",
          subtitle: "ООП и Паттерны",
          locked: true,
          courses: []
        },
        {
          id: "senior",
          title: "SENIOR",
          subtitle: "Архитектура и Highload",
          locked: true,
          courses: []
        }
      ]
    }
  ]
};
