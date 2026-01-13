# DATA_CORRUPTED

**DATA_CORRUPTED** is a top-down roguelite horror game developed during my second semester at DigiPen as part of the GAM 150 course. The player controls the last uncorrupted robot in a network overtaken by an eldritch entity, navigating hostile, tile-based environments populated by corrupted robotic enemies.

The project was built in **C** using a **custom engine**, with an emphasis on low-level system design, memory-conscious architecture, and scalable gameplay systems suitable for a small development team.

### Role
**Technical Lead Programmer** — Team of 5 programmers

### Technical Contributions
- Led the technical development of a custom C-based game engine, defining architecture, coding standards, and system boundaries for a multi-programmer team  
- Designed and implemented the core engine framework, establishing a modular and extensible foundation  
  - Component-based entity architecture enabling flexible composition of gameplay behavior  
  - Entity factory system supporting data-driven entity creation and rapid iteration  
  - Centralized engine loop and system ownership model  
- Developed the graphics backend, integrating rendering with engine systems while maintaining strict control over memory usage  
- Implemented tile map collision detection and resolution  
  - Supported solid tiles, level boundaries, and top-down movement constraints  
- Designed and implemented an Axis-Aligned Bounding Box (AABB) collision system for dynamic entities  
  - Stable collision response tailored for top-down gameplay and enemy avoidance  

### Technical Challenges & Solutions
- **Memory Management:**  
  - Designed explicit lifetime and ownership rules for engine objects to avoid leaks and invalid access  
  - Implemented custom allocation strategies appropriate for C to ensure predictable memory usage  
- **Project Scope & Team Scalability:**  
  - Defined clear engine interfaces and responsibilities to allow parallel development across the programming team  
  - Actively managed feature scope to ensure system completeness and stability within academic time constraints  

