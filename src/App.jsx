import React from 'react';

function App() {
  return (
    <div className="bg-qore-gray text-qore-black font-sans antialiased min-h-screen">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-qore-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <svg
              className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 15 L50 50 M20 30 L50 50 M80 30 L50 50"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="6" className="fill-qore-orange" />
            </svg>
            <div className="text-2xl font-heading font-extrabold text-white tracking-tighter">
              QORE
            </div>
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300">
            <a href="#about" className="hover:text-white transition">
              Философия
            </a>
            <a href="#courses" className="hover:text-white transition">
              Направления
            </a>
            <a href="#mentor" className="hover:text-white transition">
              Наставник
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-white text-qore-black px-5 py-2 rounded-lg font-bold text-sm hover:bg-qore-orange hover:text-white transition duration-300"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-qore-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Декоративная сетка */}
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-qore-orange/50 rounded-full text-qore-orange text-xs font-mono uppercase tracking-wide bg-qore-orange/10">
              Прием в STEM-академию открыт
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
              Инженерный фундамент <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-qore-orange">
                цифрового мира
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Больше, чем просто курсы программирования. Математика, Физика,
              Инженерия и AI. Строим системное мышление для детей (10-17) и даем
              твердые навыки взрослым.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-qore-orange text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-500/20"
              >
                Выбрать трек
              </a>
              <a
                href="#about"
                className="border border-gray-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-800 transition"
              >
                Наш метод
              </a>
            </div>
          </div>

          {/* Имитация интерфейса кода справа */}
          <div className="bg-qore-dark p-6 rounded-2xl border border-gray-700 shadow-2xl font-mono text-sm relative transform md:rotate-1 hover:rotate-0 transition duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400">
              <span className="text-purple-400">class</span>{' '}
              <span className="text-yellow-400">Engineer</span>(
              <span className="text-blue-400">Human</span>): <br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
              <span className="text-blue-400">__init__</span>(self): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>
              .stack = [<span className="text-green-400">"Math"</span>,{' '}
              <span className="text-green-400">"Physics"</span>,{' '}
              <span className="text-green-400">"Code"</span>] <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>
              .mindset = <span className="text-green-400">"Scientific"</span>{' '}
              <br />
              <br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
              <span className="text-blue-400">solve_problem</span>(self, task):{' '}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">
                return
              </span>{' '}
              <span className="text-blue-400">optimize</span>(task)
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 text-qore-orange">
              &gt; System: Core systems online...
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY (White Block) */}
      <section id="about" className="py-20 bg-qore-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                1
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Научная точность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Мы не упрощаем до примитива. Если учим нейросети — разбираем
                математику внутри. Если учим веб — говорим о протоколах и
                архитектуре.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                2
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Инженерный подход
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Код — это инструмент, а не самоцель. Мы учим проектировать
                системы, искать решения и мыслить как инженеры NASA, а не просто
                "кодеры".
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                3
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Фундаментальность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Технологии меняются, физика и математика остаются. Мы даем базу,
                которая позволит освоить любой новый язык или инструмент за
                неделю.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES (Dark accent block) */}
      <section id="courses" className="py-20 bg-qore-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-12">
            Образовательные треки
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Course 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 flex flex-col">
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                10-17 лет
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Алгоритмы и Python
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Развиваем логику через код. Не просто учим синтаксис, а решаем
                олимпиадные задачи и строим математические модели.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Структуры данных
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Основы Computer Science
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Создание ботов и игр
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-qore-black rounded-lg font-bold hover:bg-qore-black hover:text-white transition">
                Подробнее
              </button>
            </div>

            {/* Course 2 */}
            <div className="bg-qore-black text-white p-8 rounded-2xl shadow-xl transform md:-translate-y-4 border border-gray-800 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-qore-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                HIT
              </div>
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                14+ и Взрослые
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Fullstack Инженерия
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Проектирование сложных веб-систем. От базы данных до интерфейса.
                Архитектура, безопасность и масштабируемость.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  System Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  React & Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  DevOps практики
                </li>
              </ul>
              <button className="w-full py-3 bg-qore-orange rounded-lg font-bold hover:bg-orange-600 transition">
                Записаться
              </button>
            </div>

            {/* Course 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 flex flex-col">
              <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                16+ и Взрослые
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                AI & Высшая Математика
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Понимаем, как работают нейросети на уровне формул. Линейная
                алгебра, статистика и Machine Learning.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Math for CS
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Deep Learning
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-qore-orange rounded-full mr-2"></span>
                  Data Analysis
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-qore-black rounded-lg font-bold hover:bg-qore-black hover:text-white transition">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MENTOR & TRUST */}
      <section id="mentor" className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
              {/* Плейсхолдер для фото наставника */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ваш наставник
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              "Я верю, что программирование — это новая грамотность. Моя задача
              не заставить зубрить синтаксис, а научить мыслить как инженер."
            </p>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-bold text-3xl text-qore-orange mb-1">
                  5+
                </div>
                <div className="text-gray-500">Лет коммерческой разработки</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-qore-orange mb-1">
                  200+
                </div>
                <div className="text-gray-500">Обученных студентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section id="contact" className="py-24 bg-qore-black text-white relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
            Начни путь в IT сегодня
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Оставь заявку. Мы свяжемся в Telegram или WhatsApp, обсудим цели и
            подберем группу. Без спама и звонков.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-qore-orange focus:ring-1 focus:ring-qore-orange transition"
            />
            <input
              type="tel"
              placeholder="Телефон или @username"
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-qore-orange focus:ring-1 focus:ring-qore-orange transition"
            />
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center justify-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700">
                <input
                  type="radio"
                  name="audience"
                  className="mr-2 text-qore-orange focus:ring-qore-orange"
                />
                Для ребенка
              </label>
              <label className="flex items-center justify-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700">
                <input
                  type="radio"
                  name="audience"
                  className="mr-2 text-qore-orange focus:ring-qore-orange"
                />
                Для себя
              </label>
            </div>
            <button
              type="button"
              className="w-full bg-qore-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 mt-4"
            >
              Отправить заявку
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-6">
            Нажимаю кнопку, вы соглашаетесь с политикой конфиденциальности QORE.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-qore-dark text-indigo-200 py-10 border-t border-indigo-800 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <svg
              className="w-8 h-8"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 15 L50 50 M20 30 L50 50 M80 30 L50 50"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="6" className="fill-qore-orange" />
            </svg>
            <span className="font-heading font-bold text-white text-lg">
              QORE
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">
              Telegram
            </a>
            <a href="#" className="hover:text-white transition">
              WhatsApp
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            © 2025 QORE School. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
