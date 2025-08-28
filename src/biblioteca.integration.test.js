const bibliotecaService = require('./biblioteca.service')

test('Verificar se o nome do livro está vazio e retornando erro', function() {
    const resultado = bibliotecaService.criarLivro("")
    
    expect(resultado).toBe("Erro: Nome é obrigatório!")
})

test('Verificar se o nome do autor do livro está vazio e retornando erro', function() {
    const resultado = bibliotecaService.criarLivro("Toradora!", "")
    
    expect(resultado).toBe("Erro: Autor é obrigatório!")
})

test('Verificar se o ano de publicação do livro está vazio e retornando erro', function() {
    const resultado = bibliotecaService.criarLivro("Toradora!", "Yuyuko Takemiya", )
    
    expect(resultado).toBe("Erro: Ano de publicação é obrigatório!")
})



test('Verificar se o titulo do livro está vazio e retornando erro', function() {
    const resultado = bibliotecaService.buscarLivroPorNome("")
    expect(resultado).toBe("Erro: Título é obrigatório para busca")
})

test('Verificar se o Categoria do livro está vazio e retornando erro', function() {
    const resultado = bibliotecaService.buscarLivroPorCategoria("")
    expect(resultado).toBe("Erro: Categoria é obrigatória para busca")
})

test('Verificar se o livro está sendo criado com sucesso', function() {
    const resultado = bibliotecaService.criarLivro("Toradora!", "Yuyuko Takemiya", 2020, "cat" )
    const resultadoLsitar = bibliotecaService.listarLivros();
    expect(resultado.nome).toBe("Toradora!")
    expect(resultadoLsitar[0].nome).toBe("Toradora!")
})

test("Verificar Busca funcionando", function() {
    bibliotecaService.criarLivro("Toradora!", "Yuyuko Takemiya", 2020, "cat" )
    const resutaldoNome = bibliotecaService.buscarLivroPorNome("Toradora!")
    expect(resutaldoNome.nome).toBe("Toradora!")
    const resutaldoCategoria = bibliotecaService.buscarLivroPorCategoria("cat")
    expect(resutaldoCategoria.categoria).toBe("cat")
})