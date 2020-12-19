import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'Maria@gmail.com',
      idade: 29,
      peso: 75,
      altura: 1.69
    })
    res.json(novoAluno);
  }
}

export default new HomeController();
