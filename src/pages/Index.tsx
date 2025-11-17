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
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GOOGLE_FORM_URL = "https://forms.gle/pSLNuGLMSBH11XYr7";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Icon name="Target" size={24} className="text-primary md:w-7 md:h-7" />
              <span className="text-lg md:text-xl font-bold text-secondary">LeadGen AI</span>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a href="tel:+79936929392" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                <span>+7 (993) 692-93-92</span>
              </a>
              <a href="mailto:Consult@shelfin.ru" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                <span>Consult@shelfin.ru</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DropdownMenuTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Icon name="Phone" size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <a href="tel:+79936929392" className="flex items-center gap-2 cursor-pointer">
                      <Icon name="Phone" size={16} />
                      <span>+7 (993) 692-93-92</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="mailto:Consult@shelfin.ru" className="flex items-center gap-2 cursor-pointer">
                      <Icon name="Mail" size={16} />
                      <span>Consult@shelfin.ru</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                onClick={() => window.open(GOOGLE_FORM_URL, "_blank")} 
                className="bg-accent hover:bg-accent/90 text-sm md:text-base px-3 md:px-4 py-2 h-9 md:h-10"
              >
                <span className="hidden sm:inline">Получить 7 лидов бесплатно</span>
                <span className="sm:hidden">7 лидов</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-16 pb-24 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
              🎯 AI + Ручная проверка
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Получите список потенциальных клиентов под ваш бизнес за 24 часа
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы подбираем компании по вашим критериям с помощью нейросетей и ручной проверки — быстро, точно, продуманно.<br className="hidden sm:block" />
              <span className="font-semibold text-foreground">Первые 7 лидов — бесплатно</span>, остальное — от 100 руб. за контакт.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
                className="bg-accent hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Получить 7 бесплатных лидов
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Простой процесс от запроса до получения готового списка клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon name="FileText" size={28} className="text-primary sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">1</div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">Вы оставляете запрос</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Указываете критерии поиска: отрасль, география, тип клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon name="Brain" size={28} className="text-primary sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">2</div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">Мы подбираем и проверяем</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Нейросеть ищет по сотням открытых источников. Аналитик вручную проверяет каждую запись
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon name="Download" size={28} className="text-primary sm:w-8 sm:h-8" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">3</div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">Вы получаете результат</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Через 24 часа получаете готовый список в Google Sheet / CSV
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 sm:mt-12">
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Примеры, что мы можем найти
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              От покупателей до партнёров — любые B2B-контакты
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: "ShoppingCart", title: "Покупатели", desc: "Ритейлеры электроники Восточной Европы" },
              { icon: "Package", title: "Поставщики", desc: "Производители упаковки в РФ и Казахстане" },
              { icon: "Building2", title: "B2B-клиенты", desc: "Строительные компании с оборотом от 100 млн" },
              { icon: "Handshake", title: "Партнёры", desc: "Бренды ESG-направления" },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover-scale">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon name={item.icon as any} size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: "Target", title: "Точные данные", desc: "Нейросети обучены на бизнес-каталогах" },
              { icon: "Settings", title: "Сложные критерии", desc: "Возможность детального подбора" },
              { icon: "UserCheck", title: "Ручная проверка", desc: "Аналитик проверяет перед выдачей" },
              { icon: "Zap", title: "Скорость", desc: "Результат от 24 часов" },
              { icon: "DollarSign", title: "Прозрачная цена", desc: "От 100 руб./лид" },
              { icon: "Gift", title: "Бесплатный тест", desc: "7 бесплатных лидов" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon as any} size={20} className="text-primary sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Пример результата
              </h2>
              <p className="text-white/80 text-base sm:text-lg">
                Ваш список будет в таком же формате — готов к CRM и Excel
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-secondary">
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold">Компания</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold">Сайт</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold hidden sm:table-cell">Отрасль</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold hidden md:table-cell">Регион</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold hidden lg:table-cell">Релевантность</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground">
                    <tr className="border-b">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium">ООО "ТехПоставка"</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-primary text-xs sm:text-sm">techpostavka.ru</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 hidden sm:table-cell">Промышленное оборудование</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">Москва</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs hidden lg:table-cell">Активно закупает технику</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3">
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">92</Badge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium">ООО "ЭнергоГрупп"</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-primary text-xs sm:text-sm">energogroup.eu</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 hidden sm:table-cell">Энергетика</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 hidden md:table-cell">Беларусь</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs hidden lg:table-cell">Работает с крупными проектами</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3">
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">88</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Стоимость
              </h2>
            </div>
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Icon name="DollarSign" size={20} className="text-accent flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">От 100 ₽</div>
                      <p className="text-sm sm:text-base text-muted-foreground">за проверенный лид</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Icon name="Package" size={20} className="text-accent flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">20 лидов</div>
                      <p className="text-sm sm:text-base text-muted-foreground">минимальный заказ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Icon name="Clock" size={20} className="text-accent flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">24-48 часов</div>
                      <p className="text-sm sm:text-base text-muted-foreground">срок выполнения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Icon name="Gift" size={20} className="text-accent flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">7 лидов</div>
                      <p className="text-sm sm:text-base text-muted-foreground">бесплатно для теста</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <Button 
                    onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 px-6 sm:px-8 w-full sm:w-auto"
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

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Часто задаваемые вопросы
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  Откуда берутся данные?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Мы используем только открытые источники: бизнес-каталоги, реестры компаний, публичные базы данных. 
                  Нейросеть анализирует сотни источников, находя компании по вашим критериям.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  Проверяются ли лиды вручную?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Да, каждый лид проходит ручную проверку аналитиком перед выдачей. Мы проверяем актуальность данных, 
                  соответствие критериям и качество информации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  Когда я получу результат?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Стандартный срок выполнения — 24-48 часов с момента получения запроса. Для сложных запросов 
                  может потребоваться до 3 рабочих дней.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  Можно ли получить список под свою отрасль?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Да, мы работаем с любыми отраслями B2B. Просто опишите ваши критерии в форме заказа, 
                  и мы подберём релевантные компании.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  Что делать, если лиды не подходят?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Мы бесплатно исправим список, если есть замечания по релевантности. При критических ошибках 
                  (более 50% нерелевантных лидов) вернём деньги.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-4 sm:px-6 border">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">
                  В каком формате предоставляются данные?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Результаты предоставляются в Google Sheets или CSV-файле. Формат таблицы включает: название компании, 
                  сайт, отрасль, регион, причину релевантности и оценку качества (score).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Готовы найти своих клиентов?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
              Получите первые 7 лидов бесплатно и оцените качество данных
            </p>
            <Button 
              onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-2xl hover:shadow-accent/20 transition-all w-full sm:w-auto"
            >
              <Icon name="Rocket" size={20} className="mr-2 sm:w-6 sm:h-6" />
              Отправить запрос
            </Button>
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/70">
              Мы используем только открытые источники и не передаём персональные данные третьим лицам
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 sm:py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Icon name="Target" size={20} className="text-primary sm:w-6 sm:h-6" />
                <span className="text-lg sm:text-xl font-bold">LeadGen AI</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">
                Сервис подбора B2B-лидов с помощью нейросетей и ручной проверки
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Контакты</h3>
              <div className="space-y-2 text-xs sm:text-sm text-white/70">
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
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Информация</h3>
              <div className="space-y-2 text-xs sm:text-sm text-white/70">
                <a href="/privacy-policy.html" className="block hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="/terms-of-use.html" className="block hover:text-white transition-colors">
                  Условия использования
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-xs sm:text-sm text-white/50">
            © 2024 LeadGen AI. Все права защищены.
          </div>
        </div>
      </footer>

      <a
        href="tel:+79936929392"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-40 group"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={20} className="group-hover:scale-110 transition-transform sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-2 sm:mr-3 bg-secondary text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          +7 (993) 692-93-92
        </span>
      </a>
    </div>
  );
};

export default Index;