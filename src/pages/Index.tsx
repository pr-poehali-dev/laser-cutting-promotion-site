import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: "Резка листового металла",
      description: "Высокоточная лазерная резка листовых материалов толщиной от 0.5 до 25 мм",
      materials: ["Нержавеющая сталь", "Конструкционная сталь", "Алюминий"],
      icon: "Square"
    },
    {
      title: "Резка труб",
      description: "Обработка круглых, квадратных и профильных труб диаметром до 200 мм",
      materials: ["Титан", "Алюминий", "Сталь"],
      icon: "Cylinder"
    },
    {
      title: "Сложные контуры",
      description: "Изготовление деталей сложной геометрии по вашим чертежам",
      materials: ["Любые металлы", "CAD проектирование"],
      icon: "Zap"
    }
  ];

  const portfolio = [
    {
      title: "Промышленное оборудование",
      description: "Детали для станков и производственных линий",
      image: "/img/e28ce00b-c44d-4f64-bd1a-19e849f27992.jpg"
    },
    {
      title: "Декоративные элементы",
      description: "Архитектурные и дизайнерские решения",
      image: "/img/48b059d4-72a6-4d9c-a581-60dd3820e27e.jpg"
    },
    {
      title: "Заготовки и детали",
      description: "Точные заготовки для дальнейшей обработки",
      image: "/img/a007fb4f-f4ce-4fe9-aff8-c4d0312486ec.jpg"
    }
  ];

  const pricing = [
    { material: "Нержавеющая сталь 1-3мм", price: "от 150₽/мин", popular: true },
    { material: "Конструкционная сталь 1-5мм", price: "от 120₽/мин", popular: false },
    { material: "Алюминий 1-10мм", price: "от 180₽/мин", popular: false },
    { material: "Титан 1-2мм", price: "от 300₽/мин", popular: false },
    { material: "Трубы до Ø100мм", price: "от 200₽/мин", popular: true },
    { material: "Настройка программы", price: "от 500₽", popular: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-industrial">LaserCut Pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-industrial to-industrial/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Лазерная резка металла
                <span className="text-primary block">любой сложности</span>
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Обрабатываем нержавеющую, конструкционную сталь, алюминий и титан 
                по вашему техническому заданию с точностью до 0.1мм
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-industrial">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e28ce00b-c44d-4f64-bd1a-19e849f27992.jpg" 
                alt="Лазерная резка металла"
                className="rounded-lg shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-red text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm">Точность резки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-industrial mb-4">Наши услуги</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная лазерная резка с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-industrial">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.materials.map((material, idx) => (
                      <Badge key={idx} variant="secondary">{material}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-industrial mb-4">Портфолио работ</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных проектов различной сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-industrial">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-industrial mb-4">Прайс-лист</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Стоимость работ зависит от сложности детали и типа материала
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {pricing.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-6 rounded-lg border ${
                  item.popular ? 'bg-primary/5 border-primary' : 'bg-white border-border'
                }`}>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-industrial">{item.material}</h4>
                      {item.popular && <Badge className="mt-1 bg-primary">Популярно</Badge>}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary">{item.price}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Card className="inline-block">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Icon name="Calculator" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold text-industrial">Нужен точный расчет?</p>
                      <p className="text-muted-foreground">Отправьте чертежи - рассчитаем за 15 минут</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Рассчитать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-industrial mb-4">Контакты</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-industrial mb-2">Телефон</h4>
                  <p className="text-lg text-primary font-semibold">+7 (999) 123-45-67</p>
                  <p className="text-muted-foreground">Работаем 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-industrial mb-2">Email</h4>
                  <p className="text-lg text-primary font-semibold">info@lasercut.pro</p>
                  <p className="text-muted-foreground">Ответим в течение часа</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-industrial mb-2">Адрес</h4>
                  <p className="text-lg">г. Москва, ул. Промышленная, 25</p>
                  <p className="text-muted-foreground">Производственный комплекс</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-industrial">Быстрая заявка</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-industrial">Имя</label>
                    <input 
                      type="text" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-industrial">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-industrial">Описание проекта</label>
                  <textarea 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24" 
                    placeholder="Опишите что нужно изготовить"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">LaserCut Pro</h4>
              </div>
              <p className="text-white/80">
                Профессиональная лазерная резка металла с высокой точностью и качеством
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-white/80">
                <li>Резка листового металла</li>
                <li>Обработка труб</li>
                <li>Сложные контуры</li>
                <li>CAD проектирование</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Материалы</h5>
              <ul className="space-y-2 text-white/80">
                <li>Нержавеющая сталь</li>
                <li>Конструкционная сталь</li>
                <li>Алюминий</li>
                <li>Титан</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-white/80">
                <p>+7 (999) 123-45-67</p>
                <p>info@lasercut.pro</p>
                <p>г. Москва, ул. Промышленная, 25</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 LaserCut Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}