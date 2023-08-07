import React, { forwardRef } from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import LoginForm, { ILoginFormProps, ILoginFormRef } from '../../organisms/LoginForm/LoginForm'

function LoginTemplate(props: ILoginFormProps, ref: React.Ref<ILoginFormRef>): React.ReactElement{
    return (
        <PageWrapper style={{backgroundColor: '#3fa5ea'}}>
            <LoginForm 
            {...props} ref={ref} />
        </PageWrapper>
    )
}

export default forwardRef(LoginTemplate)