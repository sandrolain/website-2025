import type { Skill } from "./data";

export interface SkillListProps {
  skills: Skill[];
  color: string;
}

const SkillList = ({ skills, color }: SkillListProps) => (
  <ul
    className="columns-3 gap-20 text-xs whitespace-nowrap"
    style={{ "--level-color": color } as React.CSSProperties}
  >
    {skills.map((skill) => (
      <li key={skill.name} className="flex items-center justify-between">
        <span>
          {skill.url ? (
            <a href={skill.url} target="_blank">
              {skill.name}
            </a>
          ) : (
            skill.name
          )}
        </span>
        {skillLevelBox(skill.level)}
      </li>
    ))}
  </ul>
);

export default SkillList;

const skillLevelBox = (level: number) => (
  <span className="flex items-center gap-1">
    {[1, 2, 3, 4].map((i) => (
      <span
        key={i}
        className={`inline-block w-3 h-3 border border-neutral-500 ${
          level >= i ? "bg-[color:var(--level-color)]" : "bg-transparent"
        }`}
      ></span>
    ))}
  </span>
);
