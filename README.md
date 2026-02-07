# 🐄 Match Backend - Livestock Breeding Management System

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

## 📖 Description

**Match Backend** is a comprehensive livestock breeding management system built with NestJS and TypeScript. The system provides intelligent breeding recommendations, tracks animal genealogy, manages performance records, and helps farmers make data-driven breeding decisions to improve their livestock quality and genetic diversity.

### 🎯 Key Features

- **Animal Management**: Complete livestock inventory with detailed profiles
- **Breeding Recommendations**: AI-powered breeding suggestions based on genetic diversity
- **Genealogy Tracking**: Comprehensive parent-child relationship management
- **Performance Monitoring**: Track milk yield, weight, and health status
- **Breeding Events**: Record and manage breeding activities and outcomes
- **User Management**: Multi-user support for farmers and agricultural professionals
- **Relatedness Estimates**: Calculate genetic relationships between animals

## 🏗️ System Architecture

### Supported Animal Types
- **Cattle**: Holstein, Friesian, Ankole, Brown Swiss, Girolando, Jersey
- **Pigs**: Large White, Duroc
- **Sheep**: Merino
- **Goats**: Local varieties

### Breeding Methods
- Natural breeding
- Artificial insemination
- Embryo transfer
- Other specialized methods

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/i-ganza007/Match_Backend.git
   cd Match_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Configure your database connection
   DATABASE_URL="postgresql://username:password@localhost:5432/match_db"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in background
docker-compose up -d
```

## 📊 Database Schema

### Core Models

#### User
- Personal information and location data
- Farm management details
- Breeding activity involvement

#### Animal
- Complete animal profiles with photos
- Genetic information and breed confidence
- Parent-child relationships
- Performance tracking

#### Breeding
- Breeding event records
- Method and date tracking
- Expected and actual outcomes
- User ratings and feedback

#### Performance Records
- Milk yield tracking
- Weight monitoring
- Health status updates
- Historical performance data

## 🔧 Development

### Project Structure
```
src/
├── animals/           # Animal management module
├── breeding_events/   # Breeding operations module
├── users/            # User management module
├── prisma-service/   # Database service layer
├── jwtservice/       # Authentication module
└── prisma/          # Database schema and migrations
```

### Available Scripts

```bash
# Development
npm run start:dev      # Start with hot reload
npm run start:debug    # Start with debugging

# Testing
npm run test           # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Test coverage

# Code Quality
npm run lint          # ESLint checking
npm run format        # Prettier formatting

# Database
npx prisma studio     # Database GUI
npx prisma migrate    # Run migrations
```

## 🎨 UI/UX Designs

> **Figma Designs Coming Soon!**
> 
> We're working on comprehensive UI/UX designs for the frontend application. The designs will include:
> 
> - 📱 Mobile-first responsive layouts
> - 🖥️ Desktop dashboard interfaces
> - 🎯 User experience flows
> - 🎨 Component library and design system
> - 📊 Data visualization mockups
> 
> **Design files.**
![alt text](frontend_designs/sign_up_screen/screen.png)
![alt text](frontend_designs/login_screen/screen.png)
![alt text](frontend_designs/interactive_breeder_map/screen.png)
![alt text](frontend_designs/breeding_matches/screen.png)
![alt text](frontend_designs/breeder_messages_list/screen.png)
![alt text](frontend_designs/breeder_conversation/screen.png)
![alt text](frontend_designs/animal_profile_details_2/screen.png)
![alt text](frontend_designs/animal_profile_details_1/screen.png)
![alt text](frontend_designs/sheep_genetic_profile/screen.png)
![alt text](frontend_designs/multi-species_dashboard/screen.png)
![alt text](frontend_designs/match_success_celebration/screen.png)

## 📈 Performance Features

- **Genetic Diversity Scoring**: Algorithms to calculate breeding compatibility
- **Inbreeding Risk Assessment**: Prevent harmful genetic combinations
- **Breed Composition Matching**: Optimize offspring characteristics
- **Performance Prediction**: Forecast expected outcomes based on parent data

## 🔐 Security

- JWT-based authentication
- Role-based access control
- Data encryption for sensitive information
- Secure API endpoints with validation

## 📚 API Documentation

The API documentation will be available at:
- Development: `http://localhost:3000/api/docs`
- Swagger/OpenAPI specification included

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation for new features
- Use conventional commit messages

## 📦 Deployment



### Production Checklist
- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] Monitoring tools setup
- [ ] Backup strategies implemented

## 🐛 Troubleshooting

### Common Issues

**Database Connection**
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Test connection
npx prisma db pull
```

**Prisma Issues**
```bash
# Reset database (development only)
npx prisma migrate reset

# Regenerate client
npx prisma generate
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer**: [i-ganza007](https://github.com/i-ganza007)
- **Project Type**: Livestock Breeding Management System
- **Status**: In Development 🚧

## 📞 Support

For support and questions:
- 📧 Email: [ianganza4@gmail.com/i.ganza@alustudent.com]
- 🐛 Issues: [GitHub Issues](https://github.com/i-ganza007/Match_Backend/issues)
- 📖 Documentation: [Project Wiki](https://github.com/i-ganza007/Match_Backend/wiki)

## 🙏 Acknowledgments

- NestJS framework for the robust backend architecture
- Prisma for the excellent database toolkit
- The open-source community for invaluable tools and resources
- Agricultural experts who provided domain knowledge

---

<p align="center">
  Made with ❤️ for improving livestock breeding practices
</p>
