#include <stdio.h> 

int main() {
    // DECLARAÇÃO DE VARIÁVEIS (int)
    int escolha_menu = -1; 
    int contador_suporte = 0;
    int contador_financeiro = 0;
    int contador_outros = 0;

    // ESTRUTURA DE REPETIÇÃO: WHILE
    while(escolha_menu != 0) {
        // INTERAÇÃO E ENTRADA DE DADOS
        printf("\n=========================================\n");
        printf("   BEM-VINDO(A) AO ATENDIMENTO VIRTUAL\n");
        printf("=========================================\n");
        printf("Escolha uma das opções abaixo para prosseguir:\n");
        printf(" [1] Suporte\n");
        printf(" [2] Financeiro\n");
        printf(" [3] Outros\n");
        printf(" [0] Encerrar Atendimento\n");
        printf("-----------------------------------------\n");
        printf("Digite a opcao: ");
        scanf("%d", &escolha_menu); // Leitura da opção

        // ESTRUTURA DE DECISÃO: SWITCH
        switch (escolha_menu) {
            case 1:
                contador_suporte++;
                printf("\n--------------------------------------\n");
                printf("   Seção de Suporte selecionada.\n");
                printf("   >> Acesso #%d\n", contador_suporte);
                printf("--------------------------------------\n");
                printf("Pressione ENTER para voltar ao menu principal... ");
                getchar(); getchar();
                break;

            case 2:
                contador_financeiro++;
                printf("\n--------------------------------------\n");
                printf("   Seção de Financeiro selecionada.\n");
                printf("   >> Acesso #%d\n", contador_financeiro);
                printf("--------------------------------------\n");
                printf("Pressione ENTER para voltar ao menu principal... ");
                getchar(); getchar();
                break;
                
            case 3:
                contador_outros++;
                printf("\n--------------------------------------\n");
                printf("   Seção Outros selecionada.\n");
                printf("   >> Acesso #%d\n", contador_outros);
                printf("--------------------------------------\n");
                printf("Pressione ENTER para voltar ao menu principal... ");
                getchar(); getchar();
                break;
                
            // FINALIZAR PROGRAMA
            case 0:
                printf("--------------------------------------\n");
                printf("   A seção Suporte foi selecionada %d vezes\n", contador_suporte);
                printf("   A seção Financeiro foi selecionada %d vezes\n", contador_financeiro);
                printf("   A seção Outros foi selecionada %d vezes\n", contador_outros);
                printf("--------------------------------------\n");
                printf("\nEncerrando atendimento... \n");
                break;

            // O que fazer quando o usuário digita uma opção inválida?
            default:
                printf("\n----------------------------------------------------\n");
                printf("   Opção inválida... \n   Digite um dos números correspondentes ao menu!\n");
                
                int c; // Variável temporária para armazenar cada caractere lido
                while ((c = getchar()) != '\n' && c != EOF) {   //Loop usado para remover erro quando usuário digita caracteres inválidos.
                                                                //Pois o loop não estava respeitando a pausa antes de voltar ao menu principal.
                    /*
                     * Este loop lê e descarta caracteres, um por um,
                     * até encontrar a quebra de linha ('\n') ou o fim do arquivo (EOF).
                     */
                }
                    
                printf("----------------------------------------------------\n");
                printf("\nPressione ENTER para voltar ao menu principal... \n");
                getchar();
                break;
        } // Fim do switch
    } // Fim do while

    // MENSAGEM FINAL APÓS SAIR DO LOOP
    printf("\n==========================================\n");
    printf("   Atendimento encerrado. Volte sempre!\n");
    printf("==========================================\n");
    
    return 0;
}