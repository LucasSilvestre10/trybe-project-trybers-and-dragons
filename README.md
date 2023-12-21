# Projeto Trybers and Dragons 

## Descrição do Projeto

O projeto "Trybers and Dragons" consiste em uma aplicação orientada a objetos inspirada em um universo de fantasia, onde os personagens possuem raças, arquétipos e habilidades distintas. O desenvolvimento é dividido em oito requisitos, cada um abordando a criação de classes, interfaces e métodos específicos.

### Requisitos Realizados:

#### 1 - Crie a classe Race
- **Objetivo:** Criar a classe abstrata `Race` que representa as raças dos personagens no universo do Trybers and Dragons (T&D).
- **Ações Realizadas:**
  - Criada a classe `Race` no diretório `src/Races/` no arquivo `Race.ts`.
  - Classe abstrata com atributos privados `name` e `dexterity`.
  - Atributos inicializados no construtor.
  - Atributos podem ser lidos, mas não alterados.
  - Método estático `createdRacesInstances` lançando um erro "Not implemented".
  - Getter abstrato `maxLifePoints`.

#### 2 - Crie classes que herdam de Race
- **Objetivo:** Criar classes específicas (`Dwarf`, `Elf`, `Halfling` e `Orc`) que herdam da classe abstrata `Race`.
- **Ações Realizadas:**
  - Criadas as classes `Dwarf`, `Elf`, `Halfling` e `Orc` no diretório `src/Races/`.
  - Cada classe herda de `Race` e inicializa o número máximo de pontos de vida no construtor.
  - Classes exportadas de forma padrão.
  - Importação e exportação no arquivo `src/Races/index.ts`.

#### 3 - Crie a interface Energy
- **Objetivo:** Criar a interface `Energy` para representar a energia gasta por personagens no T&D.
- **Ações Realizadas:**
  - Criada a interface `Energy` no arquivo `Energy.ts` no diretório `src/`.
  - A interface possui os atributos `type_` e `amount`.
  - Criado o tipo `EnergyType` e exportado explicitamente.

#### 4 - Crie a classe Archetype
- **Objetivo:** Criar a classe abstrata `Archetype` representando os talentos especiais dos personagens.
- **Ações Realizadas:**
  - Criada a classe `Archetype` no diretório `src/Archetypes/` no arquivo `Archetype.ts`.
  - Classe abstrata com atributos privados `name`, `special` e `cost`.
  - Atributos inicializados no construtor.
  - Atributos podem ser lidos, mas não alterados.
  - Método estático `createdArchetypeInstances` lançando um erro "Not implemented".
  - Getter abstrato `energyType`.

#### 5 - Crie classes que herdam de Archetype
- **Objetivo:** Criar classes específicas (`Mage`, `Necromancer`, `Warrior` e `Ranger`) que herdam de `Archetype`.
- **Ações Realizadas:**
  - Criadas as classes no diretório `src/Archetypes/`.
  - Cada classe herda de `Archetype` e inicializa habilidades específicas no construtor.
  - Classes exportadas de forma padrão.
  - Importação e exportação no arquivo `src/Archetypes/index.ts`.

#### 6 - Crie a interface Fighter
- **Objetivo:** Criar a interface `Fighter` para representar personagens capazes de lutar.
- **Ações Realizadas:**
  - Criada a interface `Fighter` no arquivo `Fighter.ts` no diretório `src/Fighter/`.
  - A interface possui atributos `lifePoints`, `strength`, `defense`, `energy` e métodos `attack()`, `special()`, `levelUp()` e `receiveDamage()`.

#### 7 - Crie a classe Character
- **Objetivo:** Criar a classe `Character` que representa uma personagem no T&D, implementando a interface `Fighter`.
- **Ações Realizadas:**
  - Criada a classe `Character` na raiz do diretório `src/`.
  - Implementação da interface `Fighter` com atributos e métodos relacionados a uma personagem.
  - Utilização de raça, arquétipo e geração de valores aleatórios.
  - Métodos `receiveDamage`, `attack`, `levelUp` e `special`.

#### 8 - Crie a interface SimpleFighter
- **Objetivo:** Criar a interface `SimpleFighter` para personagens que não possuem habilidades avançadas.
- **Ações Realizadas:**
  - Criada a interface `SimpleFighter` no arquivo `SimpleFighter.ts` no diretório `src/Fighter/`.
  - A interface possui atributos `lifePoints`, `strength` e métodos `attack()` e `receiveDamage()`.

