#include <stdio.h>
#include <stdbool.h>

int main() {
    // 1. DECLARAÇÃO DE VARIÁVEIS E MATRIZ
    
    // Variáveis de Controle (INT)
    int i = 0; // Índice para Linhas (Dias)
    int j = 0; // Índice para Colunas (Bairros)
    int status = 0; // testar scanf no primeiro bloco
    
    // MATRIZ DE DADOS (FLOAT)
    // 7 Linhas (Dias) x 4 Colunas (Bairros), inicializada com zero.
    float chuva[7][4] = {0}; 
    
    // =======================================================
    // BLOCO 1: ENTRADA E CLASSIFICAÇÃO IMEDIATA
    // =======================================================
    
    printf("==================================================\n");
    printf("  SISTEMA DE REGISTRO DE CHUVAS (7 Dias x 4 Bairros)\n");
    printf("==================================================\n");
    printf("Digite abaixo a quantidade de chuva em milimetros (mm) para cada periodo:\n");
    
    // LOOPS ANINHADOS PARA LEITURA E CLASSIFICAÇÃO IMEDIATA
    for(int i = 0; i <= 6; i++) {
        for(int j = 0; j <= 3; j++){
            
            // Solicitação de Dados
            printf("\nDia [%d] Bairro [%d] = ", i+1, j+1);
            status = scanf("%f", &chuva[i][j]);
            if(status == 0) {
                printf("\nERRO: Valor não numérico inserido. Por favor, digite apenas números (Ex: 10.5).\n");
                
                // Limpeza de buffer e decremento
                int c; // Variável para armazenar o caractere lido
                
                // 1. Limpa o buffer de todos os caracteres inválidos (letras, etc.)
                while ((c = getchar()) != '\n' && c != EOF) {
                    /* Descartando lixo de memória */
                }
            
                // 2. Volta o contador para repetir a pergunta para o mesmo Bairro/Dia
                j--; 
                
                // 3. Pula o restante do loop (a classificação) e começa a próxima iteração
                continue;
            }
            else{
            // CLASSIFICAÇÃO IMEDIATA (Uso do if/else if/else para eficiência)
            if (chuva[i][j] > 0 && chuva[i][j] < 5.0) {
                printf(" -> Classificação: Chuva Fraca\n");
            } else if (chuva[i][j] >= 5.0 && chuva[i][j] < 15.0) {
                printf(" -> Classificação: Chuva Média\n");
            } else if (chuva[i][j] >= 15.0) {
                printf(" -> Classificação: Chuva Intensa\n");
            } else { // Cobre chuva <= 0 (0.0 mm ou valores negativos)
                printf(" -> Classificação: Sem Chuva\n");
            }
            
            } //final do IF para validar scanf + classificação imediata
        } 
    }
    
    // =======================================================
    // BLOCO 2: RELATÓRIO FINAL (HEATMAP E PROCESSAMENTO DE SAÍDA)
    // =======================================================
    
    printf("\n\n==================================================\n");
    printf("          RELATÓRIO FINAL DE CHUVAS (mm)\n");
    printf("==================================================\n");
    
    // CABEÇALHO PARA ORGANIZAÇÃO
    printf("Dia | Bairro 1  | Bairro 2  | Bairro 3  | Bairro 4  |\n");
    printf("----|-----------|-----------|-----------|-----------|\n");

    // LOOPS ANINHADOS PARA EXIBIÇÃO E RECLASSIFICAÇÃO
    for(int i = 0; i <= 6; i++) {
        printf("%3d |", i + 1); // Exibe o número do dia

        for(int j = 0; j <= 3; j++){
            // Exibe o valor da chuva formatado
            printf(" %6.2fmm |", chuva[i][j]);
            
            
        }
        printf("\n"); // Nova linha após todos os bairros do dia
    }
    printf("----|-----------|-----------|-----------|-----------|\n");


    // RELATÓRIO DETALHADO E CLASSIFICAÇÃO
    printf("\nRELATÓRIO DE INTENSIDADE PLUVIOMÉTRICA:\n");
    
    for(int i = 0; i <= 6; i++) {
        for(int j = 0; j <= 3; j++){
            
            // Linha do Relatório Detalhado
            printf("Dia [%d] Bairro [%d]: %.2fmm - ", i+1, j+1, chuva[i][j]);
            
            // Reclassificação Completa (Heatmap Lógico)
            if (chuva[i][j] > 0 && chuva[i][j] < 5.0) {
                printf("Chuva Fraca\n");
            } else if (chuva[i][j] >= 5.0 && chuva[i][j] < 15.0) {
                printf("Chuva Média\n");
            } else if (chuva[i][j] >= 15.0) {
                printf("Chuva Intensa\n");
            } else {
                printf("Sem Chuva\n");
            }
        }
    }
    
    printf("\n==================================================\n");
    printf("   Analise concluída. Total de %d dados processados.\n", 7 * 4);
    printf("==================================================\n");
    
    return 0;
}
