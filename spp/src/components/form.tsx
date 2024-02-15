
import * as React from 'react';
import TextField from '@mui/material/TextField';
import CustomChip from './Chip';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, string, z } from 'zod';
import { useMutation} from '@apollo/client';
import { gql } from '@apollo/client';
const style = {
  width: '31vw',
  marginTop: '1rem',
};
const err ={
  display:'flex',
  justifyContent:'flex-start',
  color:'red',
  flexDirection:'column',
  gap:'0.5rem'
}
const btnst = {
  backgroundColor: '#48B1ED',
  color: 'white',
  padding: '0.8rem 2.5rem',
  borderRadius: '0.5vw ',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '700',
};

type FormData = {
  id: string;
  assignedToId: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: 'Low' | 'Medium' | 'High';
  assignWork: 'Other' | 'Deposits' | 'Withdrawals';
};

const ADD_TASK = gql`
  mutation MyMutation($input: tasks_insert_input!) {
    insert_tasks(objects: [$input]) {
      affected_rows
    }
  }
`;


export default function Form() {
  const schema: ZodType<FormData> = z.object({
    id: z.string().min(3).max(50),
    assignedToId: z.string().min(3).max(50),
    description: z.string().min(2).max(100),
    startDate: z.date(),
    endDate: z.date(),
    priority: z.enum(['Low', 'Medium', 'High']),
    assignWork: z.enum(['Other', 'Deposits', 'Withdrawals']),
   
  });

 

const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({ resolver: zodResolver(schema) });


const [addTask, { data, loading, error }] = useMutation(ADD_TASK);

const submitData = async (data: FormData) => {
  try {
    const { id, priority, ...filteredData } = data;
    const variables = {
      input: {
        ...filteredData,
        title: id, 
        priority: priority.toUpperCase(),
        status: 'ASSIGNED', 
      },
    };
    const { data: mutationData } = await addTask({ variables });
    console.log(mutationData);
    alert('Task added successfully');
  } catch (error) {
    console.error("Mutation failed", error);
    alert('Error in adding task');
  }
};

  return (
    <form style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', padding: '3vw', alignItems: 'baseline' }} onSubmit={handleSubmit(submitData)}>
      <TextField 
      id="id" 
      label="Title"
       variant="outlined" 
       style={style} {...register('id')}
       error={Boolean(errors.id)}
      helperText={errors.id &&  errors.id.message  } />
      <TextField 
      id="assignedToId" 
      label="Assign To *" 
      variant="outlined" 
      style={style} 
      {...register('assignedToId')}
      error={Boolean(errors.assignedToId)}
      helperText={errors.assignedToId &&  errors.assignedToId.message  }
      />
      <TextField id="description" label="Description" variant="outlined" style={style} {...register('description')} 
      error={Boolean(errors.description)}
      helperText={errors.description && errors.description.message}
      />
      <div style={{ ...style, display: 'flex', justifyContent: 'space-between' }}>
        <div style={err}>
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          defaultValue="2022-01-01"
          style={{ width: '15vw' }}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={errors.startDate && errors.startDate.message}
          {...register('startDate', { valueAsDate: true })}
        />
        </div>
        <TextField
          id="end-date"
          label="End Date"
          type="date"
          defaultValue="2022-01-01"
          style={{ width: '15vw' }}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('endDate', { valueAsDate: true })}
          error={Boolean(errors.endDate)}
          helperText={errors.endDate && errors.endDate.message}
        />
      </div>
      <div style={style}>
        <h6 style={{ marginLeft: '0.3rem', marginBottom: '0.6rem' }}>Priority</h6>
        <CustomChip
            labels={['Low', 'Medium', 'High']}
            value={watch('priority')}
            onChange={(value) => setValue('priority', value)}
          />

      {errors.priority && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '0.5rem' }}>{errors.priority.message}</p>}
      </div>
      <div style={style}>
        <h6 style={{ marginLeft: '0.3rem', marginBottom: '0.6rem' }}>Assign Work</h6>
        <CustomChip
            labels={['Other', 'Deposits', 'Withdrawals']}
            value={watch('assignWork')}
            onChange={(value) => setValue('assignWork', value)}
          />
        {errors.assignWork && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '0.5rem' }}>{errors.assignWork.message}</p>}
      </div>
      <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}} >
      <button
        type='submit'
        style={{ ...btnst, marginTop: '3rem', }}
      >
        CONFIRM AND ADD TASK
      </button>
      </div>
    </form>
  );
}
