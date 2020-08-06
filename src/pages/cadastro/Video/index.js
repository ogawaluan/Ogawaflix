import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    name: 'video padrão',
    url: 'https://www.youtube.com/watch?v=LlqXlX6RFZE',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Video
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com Sucesso!');

        videosRepository.create({
          titulo: values.name,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com Sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
