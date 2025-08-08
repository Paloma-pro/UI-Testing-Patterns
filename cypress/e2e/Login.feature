Feature: Autenticação
    Scenario Outline: Login de usuario
        Given que estou na página inicial
        When eu faço login com o usuário "<email>" e senha "<senha>"
        Then o nome do usuário deve aparecer na página de perfil

        Examples:
            | email               | senha                    |
            | cliente@ebac.art.br | GD*peToHNJ1#c$sgk08EaYJQ |
