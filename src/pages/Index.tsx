import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const GOOGLE_FORM_URL = "https://forms.gle/pSLNuGLMSBH11XYr7";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Target" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">LeadGen AI</span>
          </div>
          <Button onClick={() => window.open(GOOGLE_FORM_URL, "_blank")} className="bg-accent hover:bg-accent/90">
            Получить 7 лидов бесплатно
          </Button>
        </div>
      </header>

      <section className="pt-16 pb-24 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
              🎯 AI + Ручная проверка
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Получите список потенциальных клиентов под ваш бизнес за 24 часа
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы подбираем компании по вашим критериям с помощью нейросетей и ручной проверки — быстро, точно, продуманно.<br />
              <span className="font-semibold text-foreground">Первые 7 лидов — бесплатно</span>, остальное — от 100 руб. за контакт.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
                className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Получить 7 бесплатных лидов
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>Результат за 24 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Ручная проверка каждого лида</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="TrendingDown" size={18} className="text-primary" />
                <span>От 100 руб/лид</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Простой процесс от запроса до получения готового списка клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileText" size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-4">1</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Вы оставляете запрос</h3>
                <p className="text-muted-foreground">
                  Указываете критерии поиска: отрасль, география, тип клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-4">2</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Мы подбираем и проверяем</h3>
                <p className="text-muted-foreground">
                  Нейросеть ищет по сотням открытых источников. Аналитик вручную проверяет каждую запись
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Download" size={32} className="text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-4">3</div>
                <h3 className="text-xl font-bold text-secondary mb-3">Вы получаете результат</h3>
                <p className="text-muted-foreground">
                  Через 24 часа получаете готовый список в Google Sheet / CSV
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Примеры, что мы можем найти
            </h2>
            <p className="text-muted-foreground text-lg">
              От покупателей до партнёров — любые B2B-контакты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "ShoppingCart", title: "Покупатели", desc: "Ритейлеры электроники Восточной Европы" },
              { icon: "Package", title: "Поставщики", desc: "Производители упаковки в РФ и Казахстане" },
              { icon: "Building2", title: "B2B-клиенты", desc: "Строительные компании с оборотом от 100 млн" },
              { icon: "Handshake", title: "Партнёры", desc: "Бренды ESG-направления" },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover-scale">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "Target", title: "Точные данные", desc: "Нейросети обучены на бизнес-каталогах" },
              { icon: "Settings", title: "Сложные критерии", desc: "Возможность детального подбора" },
              { icon: "UserCheck", title: "Ручная проверка", desc: "Аналитик проверяет перед выдачей" },
              { icon: "Zap", title: "Скорость", desc: "Результат от 24 часов" },
              { icon: "DollarSign", title: "Прозрачная цена", desc: "От 100 руб./лид" },
              { icon: "Gift", title: "Бесплатный тест", desc: "7 бесплатных лидов" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Пример результата
              </h2>
              <p className="text-white/80 text-lg">
                Ваш список будет в таком же формате — готов к CRM и Excel
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-secondary">
                      <th className="px-4 py-3 font-semibold">Компания</th>
                      <th className="px-4 py-3 font-semibold">Сайт</th>
                      <th className="px-4 py-3 font-semibold">Отрасль</th>
                      <th className="px-4 py-3 font-semibold">Регион</th>
                      <th className="px-4 py-3 font-semibold">Релевантность</th>
                      <th className="px-4 py-3 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">ООО "ТехПоставка"</td>
                      <td className="px-4 py-3 text-primary">techpostavka.ru</td>
                      <td className="px-4 py-3">Промышленное оборудование</td>
                      <td className="px-4 py-3">Москва</td>
                      <td className="px-4 py-3 text-sm">Активно закупает технику</td>
                      <td className="px-4 py-3">
                        <Badge className="bg-green-100 text-green-700 border-green-200">92</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">ООО "ЭнергоГрупп"</td>
                      <td className="px-4 py-3 text-primary">energogroup.eu</td>
                      <td className="px-4 py-3">Энергетика</td>
                      <td className="px-4 py-3">Беларусь</td>
                      <td className="px-4 py-3 text-sm">Работает с крупными проектами</td>
                      <td className="px-4 py-3">
                        <Badge className="bg-green-100 text-green-700 border-green-200">88</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Стоимость
              </h2>
            </div>
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <Icon name="DollarSign" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">От 100 ₽</div>
                      <p className="text-muted-foreground">за проверенный лид</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Package" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">20 лидов</div>
                      <p className="text-muted-foreground">минимальный заказ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">24-48 часов</div>
                      <p className="text-muted-foreground">срок выполнения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Gift" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-secondary mb-2">7 лидов</div>
                      <p className="text-muted-foreground">бесплатно для теста</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 px-8"
                  >
                    <Icon name="Search" size={20} className="mr-2" />
                    Получить тестовый список
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Часто задаваемые вопросы
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Откуда берутся данные?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы используем только открытые источники: бизнес-каталоги, реестры компаний, публичные базы данных. 
                  Нейросеть анализирует сотни источников, находя компании по вашим критериям.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Проверяются ли лиды вручную?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, каждый лид проходит ручную проверку аналитиком перед выдачей. Мы проверяем актуальность данных, 
                  соответствие критериям и качество информации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Когда я получу результат?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартный срок выполнения — 24-48 часов с момента получения запроса. Для сложных запросов 
                  может потребоваться до 3 рабочих дней.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Можно ли получить список под свою отрасль?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем с любыми отраслями B2B. Просто опишите ваши критерии в форме заказа, 
                  и мы подберём релевантные компании.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Что делать, если лиды не подходят?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы бесплатно исправим список, если есть замечания по релевантности. При критических ошибках 
                  (более 50% нерелевантных лидов) вернём деньги.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  В каком формате предоставляются данные?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Результаты предоставляются в Google Sheets или CSV-файле. Формат таблицы включает: название компании, 
                  сайт, отрасль, регион, причину релевантности и оценку качества (score).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы найти своих клиентов?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Получите первые 7 лидов бесплатно и оцените качество данных
            </p>
            <Button 
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 shadow-2xl hover:shadow-accent/20 transition-all"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Отправить запрос
            </Button>
            <div className="mt-8 text-sm text-white/70">
              Мы используем только открытые источники и не передаём персональные данные третьим лицам
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Target" size={24} className="text-primary" />
                <span className="text-xl font-bold">LeadGen AI</span>
              </div>
              <p className="text-white/70 text-sm">
                Сервис подбора B2B-лидов с помощью нейросетей и ручной проверки
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/70">
                <a href="mailto:Consult@shelfin.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={16} />
                  <span>Consult@shelfin.ru</span>
                </a>
                <a href="tel:+79936929392" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={16} />
                  <span>+7 (993) 692-93-92</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div>Политика конфиденциальности</div>
                <div>Условия использования</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-white/10 text-sm text-white/50">
            © 2024 LeadGen AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;