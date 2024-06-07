
        function verificar() {
            const nome = document.getElementById("nome").value;
            const matricula = document.getElementById("matricula").value;
            const nota = parseFloat(document.getElementById("nota").value);
            const situacao = nota >= 7 ? "Aprovado" : "Reprovado";

            const tabela = document.getElementById("resultado");
            const linha = tabela.insertRow();
            const colunaNome = linha.insertCell(0);
            const colunaMatricula = linha.insertCell(1);
            const colunaNota = linha.insertCell(2);
            const colunaSituacao = linha.insertCell(3);

            colunaNome.innerHTML = nome;
            colunaMatricula.innerHTML = matricula;
            colunaNota.innerHTML = nota;

            // adicionando cores 
            if (situacao === "Aprovado") {
                colunaSituacao.innerHTML = `<span style="color: green;">${situacao}</span>`;
            } else {
                colunaSituacao.innerHTML = `<span style="color: red;">${situacao}</span>`;
            }
        }
