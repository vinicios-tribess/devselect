package tech.devselect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.devselect.data.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}
